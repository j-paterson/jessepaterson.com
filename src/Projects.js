import React, { Component } from "react";
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import ProgressiveImage from "react-progressive-image-loading";
import AnimatedWrapper from "./AnimatedWrapper";

import isaacs_content from "./projects/isaacs";
import mesh_reconstruction_content from "./projects/mesh_reconstruction"
import this_site_content from "./projects/this_site"
import nature_content from "./projects/nature"
import graphics_content from "./projects/graphics"
import treachery_content from "./projects/treachery"
import sixt33n_content from "./projects/sixt33n"
import vxpc_content from "./projects/vxpc"
import walle_content from "./projects/walle"

import isaacs_square from './images/optimized/AR2-min.png';
import mesh_square from './images/optimized/hand_mesh_square-min.png';
import graphics_square from './images/optimized/banana_square.png';
import vxpc_square from './images/optimized/vxpc_square-min.png';
import nature_square from './images/optimized/nature_square-min.jpg';
import walle_square from './images/optimized/walle-min.jpg';
import sixt33n_square from './images/optimized/sixt33n-min.jpg';
import treachery_square from './images/optimized/animation_square-min.png';
import site_square from './images/optimized/this_site-min.jpg';

const ProjectAPI = {
  projects: [
    { url: "isaacs", title: "ISAACS", body: isaacs_content, image:isaacs_square, tinyImage:'/images/isaacs/tinyAR2.png' },
    { url: "mesh-reconstruction", title: "Mesh Reconstruction", body: mesh_reconstruction_content, image:mesh_square, tinyImage:'/images/vmask/tinyhand_mesh_square.png' },
    { url: "graphics", title: "Graphics", body: graphics_content, image:graphics_square, tinyImage:'/images/pathtracer_website/images/tinybanana_square.png' },
    { url: "vxpc", title: "Virtual Experience Convention", body: vxpc_content, image:vxpc_square, tinyImage:'/images/vxpc/tinyvxpc_square.png' },
    { url: "nature", title: "Nature", body: nature_content, image:nature_square, tinyImage:'/images/nature/tinynature_square.jpg' },
    { url: "wall-e", title: "Wall-E", body: walle_content, image:walle_square, tinyImage:'/images/walle/tinywalle.jpg' },
    { url: "sixt33n", title: "SIXT33N", body: sixt33n_content, image:sixt33n_square, tinyImage:'/images/sixt33n/tinysixt33n.jpg' },
    { url: "treachery", title: "Treachery of Animation", body: treachery_content, image:treachery_square, tinyImage:'/images/treachery/tinyanimation_square.png' },
    { url: "this-site", title: "Personal Site", body: this_site_content, image:site_square, tinyImage:'/images/this_site/tinythis_site.jpg' },
  ],
  all: function() { return this.projects},
  get: function(url) {
    const isProject = p => p.url === url
    return this.projects.find(isProject)
  }
}

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0),
      project: ProjectAPI.get(props.match.params.url)
		};
	}
	componentDidMount() {
    window.scrollTo(0, 0)
		setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250);
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250);
		}
	}

  //INDIVIDUAL PROJECT PAGES RENDER FUNCTION
	render() {
		const { project: { title, body } } = this.state;
    const style = {
			opacity: Animated.template`${this.state.animate}`,
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["2px", "0px"]
			})},0,0)
			`
		};
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
					inputRange: [0,1],
					outputRange: ["24px", "0px"]
				})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`
		}
		return (
			<div className="page project-item">
        <div tabindex="0">
          <Animated.span style={goBackStyle} className="goBack">
            <a href="" tabIndex="1" onClick={e => {
              e.preventDefault();
              this.props.history.goBack()
            }}>&larr;</a>
          </Animated.span>
        </div>
        <Animated.div style={style} className="animated-project-wrapper">
  				<h1>{title}</h1>
  				<p>{body}</p>
        </Animated.div>
			</div>
		);
	}
  }

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
      loading: true,
			projects: [],
			animations: [],
		};
	}
	componentDidMount() {
    this._renderProjects(ProjectAPI.all());
	}
  renderImage(imageUrl, tinyImageUrl) {
    return (
      <div>
        <ProgressiveImage
            preview={tinyImageUrl}
            src={imageUrl}
            style="tinyImg"
            transitionFunction="ease"
            render={(src, style) => <img src={src} style={style} />}
        />
      </div>
    );
  }
  handleStateChange() {
    const galleryElement = this.refs.gallery;
  }
	_renderProjects(projects) {
		this.setState(
			{
				projects: projects,
				animations: projects.map((_, i) => new Animated.Value(0))
			},
			() => {
				Animated.stagger(
					100,
					this.state.animations.map(anim =>
						Animated.spring(anim, { toValue: 1 })
					)
				).start();
			}
		);
	}
	render() {
		return (
			<div className="page projects">
        <div className="gallery" ref="gallery">
  				<TransitionGroup component="ul" className="projects-grid">
  					{this.state.projects.map((p, i) => {
  						const style = {
  							opacity: this.state.animations[i],
  							transform: Animated.template`
  								translate3d(0,${this.state.animations[i].interpolate({
  								inputRange: [0, 1],
  								outputRange: ["12px", "0px"]
  							})},0)
  							`
  						};
  						return (
  							<li key={i} className="project">
  								<Animated.div style={style}>
  									<Link to={`/projects/${p.url}`}>
                      <img src={p.image}></img>
                      {/* {this.renderImage(p.image, p.tinyImage)} */}
                      <div className="title heading">{p.title}</div>
                    </Link>
  								</Animated.div>
  							</li>
  						);
  					})}
  				</TransitionGroup>
        </div>
			</div>
		);
	}
}

const ProjectsRouter = () => (
  <Switch onUpdate={() => window.scrollTo(0, 0)}>
    <Route exact path='/projects' component={Projects}/>
    <Route path='/projects/:url' component={Project}/>
  </Switch>
)

const ProjectsPage = ProjectsRouter;
export default ProjectsPage;
