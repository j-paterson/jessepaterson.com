import React, { Component } from "react";
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

import AnimatedWrapper from "./AnimatedWrapper";

const isaacs_content =
<div class="project-content">
	<div class='project-details'>
    <div>
      <i>Holographic drone interface</i>
    </div>
    <div>
      <p>
	      <b class="highlight">Skills: </b>
	      C#, Unity, ROS
      </p>
    </div>
    <div>
      <p>
      <b class="highlight">Client: </b>
      Center for Augmented Cognition
      (2016-2017)
      </p>
    </div>
	</div>
	<div class="project-description">
	  <p>
	    The goal of this project was to create an Augmented Reality interface
	    for controlling drones through the Microsoft Hololens. There were many
	    teams working on different aspects of the project, from system controls
	    to interaction design. As project priorities shifted, I switched teams to
	    work on what I felt were the most critical parts of the project.
	  </p>
	  <p>
	    On the design team, I conducted a user research study in which I ran several
	    interviews with members of the UAV club. I  used the data gathered to identify
	    several areas in which an Augmented Reality interface would be useful for drone users.
	    Based on these applications and taking into account latency limitations, I designed a
	    framework on which to develop the interface. The framework included a bounding box which
	    the drone would stay in, the ability to set camera angle and a path through nodes that
	    could be moved through 3d space and angled similar to a Bézier curve. As a culmination
	    of my experience and research on this project, I wrote an <a href="https://blog.jessepaterson.com/augmented-reality-interface-design/">essay
	    on Augmented Reality UI/UX</a>.
	  </p>
	  <p>
	    I later joined the Simultaneous Location and Mapping team to work on implementation
	    for the drone computer vision algorithms. On this team, I learned how to setup and adjust
	    	the Robotic Operating System (ROS) that we use as a server for communication between the
	    drone and a computer. This system will make it possible for us to use our interface for
	    multiple drones at the same time.
	  </p>
    <p>
      https://hololens.reality.news/news/uc-berkeley-team-commands-drone-fleet-with-hololens-0176671/
    </p>
    <p>
      http://engineering.berkeley.edu/magazine/fall-2016/seeing-believing
    </p>
    <p>
      http://citris-uc.org/meet-the-award-recipients-of-the-first-microsoft-hololens-academic-research-grants/
    </p>
	</div>
</div>
;

const treachery_content =
<div class="project-content">
  <div class='project-details'>
      <div>
          <i>3D Animation Project</i>
      </div>
      <div>
        <p>
          <b class="highlight">Skills: </b>
          Maya, After Effects, Leadership
        </p>
      </div>
      <div>
        <p>
          <b class="highlight">Client: </b>
          UCBUGG
          (2016)
        </p>
      </div>
  </div>
	<div class="project-description">
	  <p>
	      This animation project was done for the UC Berkeley 3D Modeling and Animation class.
	      Our goal was to follow the <a href="https://docs.google.com/presentation/d/16dAV1d5gqnWyYIijCpZ4bFVC49bRImPjhEtz-8dOXvE/edit#slide=id.g16b4431faa_0_35">storyboard</a> created by our director. I was the work manager for our group.
	  </p>
	  <p>
	      The work went smoothly at first, but as the semester continued, several group members
	      began to miss class and work deadlines. The rest of the group became discouraged by our
	      lack of progress. Towards the end of the semester, I called together most of our group members
	      for several large work sessions in which we managed to catch up. I became much closer to the
	      other group members through these work sessions. At this point, the tide began to turn and there
	    	was a feeling that we would manage to complete the project.
	  </p>
	  <p>
	      On the night before the animation showings, I spent the night in the lab compiling and rendering
	      all of the group member work and completing all post production editing. In the middle of the night,
	      the rendering servers broke down. I didn't want to see all the work put in by my group members go to
	      waste, so I went through and screen recorded each scene into 'playblasts' through Maya. One hour before
	      the showing, the rendering servers came back online and I rushed to replace all my playblasts with r
	      endered versions. The finished product is a bit rough, but I'm proud that we managed to complete it.
	  </p>
	</div>
</div>
;

const sixt33n_content =
<div class="project-content">
	<div class="project-details">
    <div>
        <i>A voice controlled car</i>
    </div>
    <div>
      <p>
        <b class="highlight">Skills: </b>
        C, Controls, Circuits
      </p>
    </div>
    <div>
      <p>
        <b class="highlight">Client: </b>
        Designing Information Devices and Systems
        (2016)
      </p>
    </div>
  </div>
  <div class="project-description">
      <p>
        This was the final project for my Designing Information Devices and Systems (EE16B) class
        at UC Berkeley. The goal of the project was to construct a car that would respond to 4 voice
        commands:  forward, left, right, and slow (the video shows a test of these basic controls).
      </p>
      <p>
        My partner and I built the circuit board from the ground up, using a Launchpad microcontroller to
        run the C code that we developed. The code analyzed incoming signals from the microphone and used
        Principal Component Analysis in conjunction with a high pass filter to detect and categorize voice commands.
      </p>
      <p>
        One challenge that I encountered in this project was imperfect engineering in the parts we were given.
        The frame for the car caused the vehicle to curve when equal power was applied to both motors.
        We adjusted for this by continuously taking in the difference in distance traveled by each wheel and
        adjusting the input to the motors to maintain a straight course.
      </p>
      <p>
        <a href="https://docs.google.com/document/d/1pbHqG-NaMbtg998hlRmfHgxjNHaWe0nvdeM8RTi0WwY/edit?usp=sharing"> Full Report </a>
      </p>
  </div>
</div>
;

const vxpc_content =
<div class="project-content">
	<div class='project-details'>
	    <div>
	        <i>Berkeley Virtual Reality Convention</i>
	    </div>
	    <div>
        <p>
	        <b class="highlight">Skills: </b>
	        Leadership, Organization, HTML, CSS
        </p>
	    </div>
	    <div>
        <p>
	        <b class="highlight">Client: </b>
	        VR@Berkeley
	        (2016)
        </p>
	    </div>
	</div>
	<div class="project-description">
	    <p>
	        As the Virtual Reality at Berkeley Events Manager, I handled logistics and all web/print based design for
          our club's first <a href="https://vxpc.io">Virtual Experience Convention</a>. I worked alongside our
          Industrial Relations and Marketing teams to coordinate the event.
	    </p>
	    <p>
	        The goal of the Virtual Experience Convention was to connect industry leaders to young enthusiasts and
          entrepreneurs. We provided attendees with an opportunity to experience the latest VR/AR products, hear
          from industry leaders, and network with like-minded individuals.
	    </p>
	    <p>
	        Logistics continued to change and shift right up until the morning of the event, which made keeping the schedule up to date
          quite challenging. I filled many roles throughout the day to keep the event rolling smoothly and direct
          our volunteers. Over 200 people attended the event and we were able to obtain several sponsorships. Judging by
          the feedback we received, it was great success!
	    </p>
	</div>
</div>
;

const nature_content =
<div class="project-content">
  <div class='project-details'>
    <div>
      <i>The flagship site for UC Berkeley College of Natural Resources</i>
    </div>
    <div>
      <p>
        <b class="highlight">Skills: </b>
        HTML, CSS, Drupal
      </p>
    </div>
    <div>
      <p>
        <b class="highlight">Client: </b>
        College of Natural Resources
        (2014-2017)
    </p>
    </div>
  </div>
  <div class="project-description">
    <p>
      I have worked on a number of aspects of this website since I joined the CNR Web Team.
    </p>
    <p>
      Originally, my assignments consisted of moving and redesigning massive quantities of content and users
      from an older site to this one. I gradually learned the ins and outs of the drupal system and handled
      requests for content changes. A lot of running this website has been identifying what aspects can be
      automated to reduce work by hand. I learned to create modular pages that self populate with pieces of
      content from around the site to create comprehensive compilations that require no manual updating. I also
      learned to carefully run batch processes to adjust design on a large number of content items at once.
    </p>
  </div>
</div>
;

const walle_content =
<div class="project-content">
  <div class='project-details'>
      <div>
          <i>A VR telepresence vehicle</i>
      </div>
      <div>
        <p>
          <b class="highlight">Skills: </b>
          C#, Node.js, Unity
        </p>
      </div>
      <div>
        <p>
          <b class="highlight">Client: </b>
          Treehacks, Self
          (2015)
        </p>
      </div>
  </div>
  <div class="project-description">
      <p>
          I met Tatsuki for the first time at Treehacks, an annual hackathon at Stanford. We were both on the waitlist and
          sitting outside the hackathon building. I noticed that he had an Oculus with him and struck up a conversation about
          why he brought it. We ended up getting a few extra hacker lanyards and working on this project together.
      </p>
      <p>
          Using legos, motors, and a few onboard microprocessors, we set up a VR telepresence tank  which wirelessly synced an
          onboard camera to an Oculus through a Node.js Server. All video footage and commands were passed through this server
          and a Unity application to connect with the Oculus headset. I set up the Node.js server and wrote a few C# scripts to
          make the connection.
      </p>
      <p>
          We used a Raspberry Pi and Arduino on board to remotely connect an Oculus to a camera that rotates in sync with the user's
          head with four degrees of freedom (forward/backward, left/right, yaw and pitch). Movement of the tank was controlled using
          an x-box controller through the same Node.js server.
      </p>
      <p>
          We later presented this project at the Bay Area Makerfaire. It has since been repurposed to
          become <a href='https://www.crunchbase.com/organization/adawarp#/entity'>Adawarp</a> and Tatsuki is
          continuing to work on it back in Japan. We've become good friends and still visit each other.
      </p>
  </div>
</div>
;

const this_site_content =
<div class="project-content">
  <div class='project-details'>
    <div>
      <i></i>
    </div>
    <div>
      <p>
        <b class="highlight">Skills: </b>

      </p>
    </div>
    <div>
      <p>
        <b class="highlight">Client: </b>

    </p>
    </div>
  </div>
  <div class="project-description">
    <p>

    </p>
  </div>
</div>
;

const graphics_content =
<div class="project-content">
  <div class='project-details'>
    <div>
      <i></i>
    </div>
    <div>
      <p>
        <b class="highlight">Skills: </b>

      </p>
    </div>
    <div>
      <p>
        <b class="highlight">Client: </b>

    </p>
    </div>
  </div>
  <div class="project-description">
    <p>

    </p>
  </div>
</div>
;

const mesh_reconstruction_content =
<div class="project-content">
  <div class='project-details'>
    <div>
      <i></i>
    </div>
    <div>
      <p>
        <b class="highlight">Skills: </b>

      </p>
    </div>
    <div>
      <p>
        <b class="highlight">Client: </b>

    </p>
    </div>
  </div>
  <div class="project-description">
    <p>

    </p>
  </div>
</div>
;

const ProjectAPI = {
  projects: [
    { url: "isaacs", title: "ISAACS", body: isaacs_content, image:'/images/isaacs/AR2.png' },
    { url: "treachery", title: "Treachery of Animation", body: treachery_content, image:'/images/treachery/animation_square.png' },
    { url: "sixt33n", title: "SIXT33N", body: sixt33n_content, image:'/images/sixt33n/sixt33n.jpg' },
    { url: "vxpc", title: "Virtual Experience Convention", body: vxpc_content, image:'/images/vxpc/vxpc_logo.jpg' },
    { url: "nature", title: "Nature", body: nature_content, image:'/images/nature/nature_square.jpg' },
    { url: "wall-e", title: "Wall-E", body: walle_content, image:'/images/walle/walle.jpg' },
    { url: "this-site", title: "Personal Site", body: this_site_content, image:'/images/this_site/this_site.jpg' },
    { url: "graphics", title: "Graphics", body: graphics_content, image:'/images/pathtracer_website/images/banana_square.png' },
    { url: "mesh-reconstruction", title: "Mesh Reconstruction", body: mesh_reconstruction_content, image:'/images/vmask/hand_mesh_square.png' },
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
		setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250);
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250);
		}
	}
	render() {
		const { project: { title, body } } = this.state;
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
					inputRange: [0,1],
					outputRange: ["-24px", "0px"]
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
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
		);
	}
}

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  var projectelements = document.querySelector(".projects-grid").getElementsByClassName('project')
  for(var i = 0; i < projectelements.length; i++){
    projectelements[i].classList.add("visible");
    projectelements[i].classList.remove("invisible");
  }
  return true;
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
  renderSpinner() {
    if (!this.state.loading) {
      // Render nothing if not loading
      return null;
    }
    return (
      <div className="loader" />
    );
  }
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl}
            onLoad={this.handleStateChange.bind(this)}
            onError={this.handleStateChange.bind(this)}/>
      </div>
    );
  }
  handleStateChange() {
    // In React 0.13 use: 'this.refs.gallery.getDOMNode()'
    const galleryElement = this.refs.gallery;
    this.setState({
      loading: !imagesLoaded(galleryElement),
    });
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
          {this.renderSpinner()}
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
  							<li key={i} className="project invisible">
  								<Animated.div style={style}>
  									<Link to={`/projects/${p.url}`}>
                      {/* <img src={p.image}></img> */}
                      {this.renderImage(p.image)}
                      <div className="title">{p.title}</div>
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
  <Switch>
    <Route exact path='/projects' component={Projects}/>
    <Route path='/projects/:url' component={Project}/>
  </Switch>
)

const ProjectsPage = AnimatedWrapper(ProjectsRouter);
export default ProjectsPage;
