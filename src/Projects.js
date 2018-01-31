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


const isaacs_content =
<div className="project-content">
  <h2 className="subheading">Immersive Semi-Autonomous Aerial Command System</h2>
	<div className='project-details'>
      <p>
        <b className="highlight">Skills: </b>
        C#, Unity, ROS, Computer Vision, Drones, Augmented and Virtual Reality interfaces
      </p>
      <p>
        <b className="highlight">Client: </b>
        Center for Augmented Cognition, Spring 2016 - Spring 2018
      </p>
  </div>
	<div className="project-description">
    <span className="heading">About</span>
	  <p>
	    The goal of this research project was to create an interface for controlling drones through the Microsoft Hololens.
      I joined the controls team of the project during my sophomore year at UC Berkeley. Our project was selected
      as one of the Award Recipients for the first Microsoft Hololens Academic Research Grants.
      For a while our team didn't have access to the Hololens, so we worked on ways of controlling the drones using existing
      controller free systems like the Leap Motion or Mio. When we received the Hololens,
      we learned that the primary system of interaction was through a series of airtaps, not at all the
      fluid hand gestures and tracking we had hoped for. The headset's connection latency would
      also be far too great to allow for direct control of the drone.
      The project was off to a rough start.
	  </p>
	  <p>
	    We needed information on how to create a useful platform for users.
      On the design team, I conducted a user research study in which I ran several
	    interviews with members of the UAVs at Berkeley club. I used the data gathered to identify
	    several areas in which an Augmented Reality interface would be useful for drone users.
	    Based on these applications and taking into account latency limitations, I designed a
	    framework for the interface. This framework would include a bounding box the
	    the drone would be locked inside by GPS in case of connection loss, the ability to set
      camera angle and a path through nodes that could be moved through 3d space and angled
      similar to a Bézier curve. We put this plan into motion and prototyped a Unity application over the
      next few months.
	  </p>
	  <p>
	    After completing a Minimal Viable Product for the interface, the pressure came on for our SLAM
      team, the group responsible for creating a method of mapping the terrain the drone and giving it a
      relative location to its environment. Several graduate students joined the project and we worked closely with them
      to test various approaches with a motion capture system. I learned how to setup and adjust the Robotic Operating System (ROS)
      that we use as a server for communication between the drone and a computer. This system makes it possible
      for us to use our interface for multiple drones or other robots simultaneously.
	  </p>
    <p>
      As I approached my senior year, ISAACS splintered into several different research groups and I led one of these new directions for the project.
      I spearheaded the interface development for a grant the Center of Augmented Cogntion had received to create a Virtual Reality interface for
      3d mapping cities with drones. In Spring 2017, I ran another user research study on the Hololens prototype, and identified a number
      of UX improvements to be included in the VR interface. I worked over the summer with an intern and created a prototype for the new interface.
      In the fall I recruited several team members and continued my work, connecting the interface with ROS and establishing a system for visualizing the scanned terrain in Unity.
    </p>
    <p>
      The project is expected to be completed in Spring 2018.
    </p>
    <span className="heading">News</span>
    <p>
      <a href="http://citris-uc.org/meet-the-award-recipients-of-the-first-microsoft-hololens-academic-research-grants/">Meet the Award Recipients of the first Microsoft Hololens Academic Research Grants</a>
    </p>
    <p>
      <a href="https://hololens.reality.news/news/uc-berkeley-team-commands-drone-fleet-with-hololens-0176671/">UC Berkeley team commands drone fleet with Hololens</a>
    </p>
    <p>
      <a href="http://engineering.berkeley.edu/magazine/fall-2016/seeing-believing">Seeing is believing - leveling up with augmented reality</a>
    </p>
	</div>
</div>
;

const mesh_reconstruction_content =
<div className="project-content">
  <h2 className="subheading">A point cloud to mesh converter</h2>
  <div className='project-details'>
    <p>
      <b className="highlight">Skills: </b>
      Linear Algebra, Vector Calculus, C++
    </p>
    <p>
      <b className="highlight">Client: </b>
      CS 184: Computer Graphics and Imaging, Spring 2017
    </p>
    <p>
      <b className="highlight">Partner: </b>
      Bryce Schmidtchen
    </p>
  </div>
  <div className="project-description">
    <div className="section">
      <h2 className="no-bottom-margin">Abstract</h2>
      <h4 className="no-top-margin">Project Summary</h4>
      <p>In this project, we implemented a point-cloud to mesh reconstruction algorithm with much of the implementation derived from the Poisson reconstruction algorithm. The pipeline begins with a .ply file which specifies the vertices and the faces for the given point cloud. This .ply file is then processed using a ./ply2normals executable which calculates the oriented surface normals at each vertice based on the provided faces. Once the .ply file is pre-processed, the file is parsed into our modified version of MeshEdit. As the vertex and normal data is fed in, an Octree of a specified leaf depth is constructed. This Octree spatially partitions the data using a modified bounding box implementation. After Octree construction, we extract the mesh from the point cloud using the Marching Cubes algorithm and an indicator function that we designed. This indicator function allows us to specify which corners of the Octree leaf nodes are within the desired surface. This then enables our Marching Cubes implementation to check which edges will be intersected and using that information, return the correct triangles. Once these triangles are returned, we load them into MeshEdit to view the newly constructed mesh.</p>
    </div>
    <div className="section">
      <h2 className="no-bottom-margin">Technical Approach</h2>
      <h4 className="no-top-margin">Approach Details</h4>
      <ul className="no-list-style">
          <h4>Determining Vertex Normals</h4>
        <li className="no-list-style">
          <p>The first possible way to evaluate the normals is to use the .ply format (which usually contains faces in its data) and parse the files to generate the oriented vertices vectors. This can be accomplished using one of the <a href="http://www.cc.gatech.edu/projects/large_models/">Georgia Tech PLY tools</a>. This approach is the direction we ended up using</p>
          <p>The second approach assumes that we don’t have face data (as is the case with Kinect collected data). This approach is more in-depth and involves finding the tangential planes for approximating the local surface. To achieve this, the centroid of every vertex must be computed (as the average of all k-nearest neighbors). The corresponding normal is then computed using the eigenvector of each vertex. Next we must construct a Riemannian graph which defines the edges to the k-nearest neighbors of each vertex. We would use the “minimum spanning tree” algorithm from Kruskal on this Riemannian graph to weight the normals results to different lengths. (<a href="http://vr.tu-freiberg.de/">http://vr.tu-freiberg.de/</a>)</p>
        </li>
        <li>
          <h4>PLY to TXT and Format Standard</h4>
        </li>
        <li className="no-list-style">
          <p>In this step, we parse and format the vertex and normal data in the .ply files to be stored in a .txt file which can be scanned to create our list of points and normals (Or just a list of points in the case of Kinect Data which will be parsed to generate our normals).</p>
        </li>
        <li>
          <h4>Octree Creation</h4>
        </li>
        <li className="no-list-style">
          <p>An octree recursively divides a space into 8 cubes with the condition:</p><code>If a node cube contains a point and is not at max depth, divide the cube again and recurse on the children.</code>
          <p>Each time a node creates 8 child nodes, the points within the parent node are divided into up to 8 spatial sets and passed down to the child nodes. At our final depth D, the leaf nodes of this tree will contain the final lists of the points within them. In this way we will fulfill the "the property that every point sample falls into a leaf node at depth D." (<a href="http://hhoppe.com/poissonrecon.pdf">http://hhoppe.com/poissonrecon.pdf</a>) Each of these point samples will hold both a position and associated normal.</p>
          <p>Because the Vector/Gradient field is defined using the 8 closest neighboring nodes to each vertex, we must also consider speed of traversing this tree, and what data we must preserve in the construction to accelerate the identification of neighboring nodes.</p>
        </li>
        <li>
          <p className="subheading">Assigning Base Functions</p>
        </li>
        <li className="no-list-style">
          <p>Each node of the Octree must have a function Fo assigned to it such that "the vector field V can be precisely and efficiently represented as the linear sum of the Fo." (<a href="http://hhoppe.com/poissonrecon.pdf">http://hhoppe.com/poissonrecon.pdf</a>)
          Essentially, the vector field will be made of a combination of these base functions shifted and scaled down according to the size of the node in the octree it corresponds to (number of points it contains).</p>
          <img align="middle" className="invert" src="/images/vmask/vector_field.png" width="300px" alt="vector field"/>
          <p>These functions are defined as the n-th convolution of a box filter with itself, where n=3 in order to create a piecewise quadratic approximation to a Gaussian. This convolution is centered about the node o and stretched by the size of o.</p>
          <img align="middle" className="invert" src="/images/vmask/box_filter_convolution.png" width="400px" alt="box filter convolution"/><br/>
          <img align="middle" className="invert" src="/images/vmask/function_stretch.png" width="200px" alt="function"/>
          <p>(Due to the central limit theorem, if you convolve a box filter with itself n times, as n goes to infinity the result approaches a Gaussian.)</p>
        </li>
        <li>
          <h4>Indicator Function</h4>
        </li>
        <li className="no-list-style">
          <img className="img-float-right" align="middle" src="/images/vmask/algorithm.png" width="500px" alt="poisson reconstruction algorithm"/>
          <div className="indent">
            <p>According the Poisson Reconstruction algorithm, solving for the indicator function X involves ensuring that the projection of the Laplacian of X onto the space of base functions is closest to the projection of the divergence of the vector field.</p>
            <p>We took a shortcut in the section and instead developed our own indicator function based on the point and normal averaged plane within a given node.</p>
            <p>The image on the right illustrates the algorithm that we designed and implemented for our indicator function. This function was required by Marching Cubes in order to extract the mesh from our Octree. This algorithm begins by taking the points within any given Octree leaf node and averaging their positions and normals. Once these averages are found, we can find the equation for a plane using this averaged point and normal. This plane is acts like an average though all of the points. Following this, we take the corner points of the given Octree leaf node, and project them onto the averaged plane. We then find the vector between the projected point and the current corner being worked with. Depending on the orientation of this vector compared to the plane’s normal vector, we can tell whether this corner is inside or outside the surface.</p>
            <p>This image was created using Oculus’ Medium sculpting application to visually illustrate our algorithm. The Octree leaf node’s bounding box can be seen in green and the corners are in purple with their projected points also in purple. The point cloud is illustrated in blue and the normal vectors can be seen throughout the image.</p>
          </div>
        </li>
        <li>
          <h4>Marching Cubes Algorithm</h4>
        </li>
        <li className="no-list-style">
          <p>In order to extract the final mesh, we implemented the Marching Cubes Algorithm as detailed in the <a href="http://dl.acm.org/citation.cfm?id=37422">'Marching cubes: A high resolution 3D surface construction algorithm'</a> paper. Using the averaged plane indicator function that we developed, we were able to determine which points of an octree node were inside of the mesh. Each corner corresponded to a bit in an index (0 for outside, 1 for inside).</p>
          <p>This index is then used to extract a list of connected edges from our 'triangle table' which contains 256 possible configurations (We borrowed our triangle table from Paul Bourke's article on <a href="http://paulbourke.net/geometry/polygonise/">polygonising a scalar field</a>). We calculated the midpoints of each edge and used those as the triangle vertices to be inserted into the mesh.</p>
          <p>We started testing using a number of geometric indicator functions and later switched to the averaged plane indicator function we developed in order to approximate the mesh of more complicated objects.</p>
          <p>Displayed below are several sphere tests at varying octree depths.</p>
          <img align="middle" className="" src="/images/vmask/spheres.png" width="400px" alt="preliminary spheres"/>
        </li>
      </ul>
      <h3>Challenges</h3>
      <ol>
        <li><span className="subheading">The mathematical rigor of the Poisson solution</span>
          <p>Once the vector field that approximated the gradient of the indicator function was calculated, the actual indicator function had to be calculated from this gradient. This required computing a scalar function whose Laplacian (divergence of gradient) equaled the divergence of the vector field</p>
          <ul>
            <li>
              <p>We compiled over 20 pages of notes on resources and design decisions where we detailed the algorithm and explained to ourselves the mathematical concepts that were necessary to understand to implement the Poisson solution.</p>
            </li>
            <li className="no-list-style">
              <img className="img-float-right" align="middle" src="/images/vmask/meme.jpg" width="250px" alt="And THIS is how you implement the Poisson Algorithm"/>
            </li>
            <li>
              <p>We also reached out to Dr. Misha Kazhdan who was one of the three original authors of the Poisson Reconstruction Algorithm paper. We had several emails with him and he explained how we should approach the calculation of the indicator function.</p>
            </li>
            <li>
              <p>After we spent multiple days breaking down the mathematics behind the Poisson solution and hitting a barrier of how far we were able to implement it, we came up with a possible solution. One attempted solution was to use Dr. Misha Kazhdan online implementation of the Poisson solution to extract the indicator function so that we could evaluate it at the corners of our Octree nodes. However, the complexities of doing this made it infeasible.</p>
            </li>
            <li>
              <p>After facing these difficulties, we ultimately designed our own indicator function which is detailed in the technical approach section of our report.</p>
            </li>
          </ul>
        </li>
        <li><span className="subheading">Octree Construction</span>
          <ul>
            <li>
              <p>Originally, the Octree’s bounding boxes were not splitting correctly and it was necessary to visualize how these boxes were splitted to see which corners were being placed at the wrong location. We utilized an online 3D visualization tool to do this and inputted our Octree node’s corner points to see where things were going wrong. This allowed us to adjusted how our bounding boxes were splitting and</p>
            </li>
            <li className="no-list-style">
              <img className="img-center" align="middle" src="/images/vmask/OctreeViz.png" width="40%" alt="Octree visualisation"/>
            </li>
            <li>
              <p>Additionally, our Octree was incorrectly specifying leaf nodes sometimes not subdividing down to the desired depth. This led to our marching cubes returning triangles with a large variance in size and position. This was debugged by observing the fact of the disproportionate triangles and realizing that these triangles would only ever be returned from leaf nodes, so these nodes must be at a higher depth than desired.</p>
            </li>
            <li className="no-list-style">
              <img align="middle" src="/images/vmask/sphere_challenge.png" width="32%" alt="Sphere glitch"/>
              <img align="middle" src="/images/vmask/bunny_challenge.png" width="30%" alt="Bunny model glitch"/>
              <img align="middle" src="/images/vmask/hand_challenge.png" width="25%" alt="Hand model glitch"/>
            </li>
          </ul>
        </li>
        <li><span className="subheading">Spatial Hashing</span>
          <ul>
            <li>
              <p>We pivoted several times through the course of this project. Due to our pivots, some of our scaffolding code and algorithms for the Poisson Reconstruction ended up unused. One the larger sections of code that we were unable to use was our Nearest Neighbors algorithm, which used spatial hashing to search the nearest neighbors of a node in an expanding radius until the desired number of neighbors was found.</p>
            </li>
          </ul>
        </li>
      </ol>
      <div>
        <h3>Lessons</h3>
        <ol>
          <li><span className="subheading">Be willing to pivot</span>
            <ul className="no-list-style">
              <li>
                <p>When faced with a seemingly insurmountable task that is required, don’t be afraid to construct your own version of the algorithm to circumvent the problem and still reach the solution. After spending such a significant amount of time attempting to implement the Poisson solution to the indicator function without success, we eventually came to the conclusion that we needed to find another way to accomplish this. We were extremely committed to getting the Poisson solution to work from the beginning. However, over time we learned how necessary it is to realize when you have to pivot and change your direction in order to accomplish your ultimate goal.</p>
              </li>
            </ul>
          </li>
          <li><span className="subheading">Exposure to numerous new graphics concepts</span>
            <ul className="no-list-style">
              <li>
                <p>We learned a large deal of information from having to do such a great amount of research on point clouds, the Poisson algorithm, and all of the constituents part necessary to make it function such as marching cubes. We learned about many of the different methods that point clouds are processed, how different reconstructions algorithms mathematically function, and how both impactful and useful marching cubes has been in the graphics industry.</p>
              </li>
            </ul>
          </li>
          <li><span className="subheading">Thinking and imagining things spatially</span>
            <ul className="no-list-style">
              <li>
                <p>Through having to construct Octrees, split bounding boxes, spatial hash, march through cubes, and construct an indicator function among other things, we both gained skill in conceptualizing how to accomplish different combinations of 3D graphics tasks.</p>
              </li>
            </ul>
          </li>
          <li><span className="subheading">“The best way out is always through”</span>
            <ul className="no-list-style">
              <li>
                <p>We spent several days straight attempting to get the Poisson solution to function. Although the Poisson solution did not arise, by persisting through this process we were able to still implement an algorithm that gives meshes which were quite close to the goal we hoped to achieve.</p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="section">
        <h2>Results</h2>
        <ul className="no-list-style">
          <li className="subheading">Bunny Model: Pointcloud to Mesh</li>
          <li className="no-list-style">
            <img align="middle" src="/images/vmask/bunny_pointcloud.png" width="680px" alt="Bunny point cloud"/>
            <img align="middle" src="/images/vmask/bunny_mesh.png" width="680px" alt="Bunny mesh"/>
          </li>
          <li className="subheading">Generated Hand Mesh: Shaded and Unshaded</li>
          <li className="no-list-style">
            <img align="middle" src="/images/vmask/hand_mesh.png" width="680px" alt="Hand Mesh Unshaded"/>
            <img align="middle" src="/images/vmask/hand_mesh_shaded.png" width="680px" alt="Hand Mesh Shaded"/>
          </li>
        </ul>
        <iframe title="Final Presentation" allowfullscreen frameborder="0" height="617" src="https://www.youtube.com/embed/tohKA5zTeeU" width="790"></iframe>
        <iframe title="Final Powerpoint" allowfullscreen="true" frameborder="0" height="617" src="https://docs.google.com/presentation/d/1vrTBcHwqHXur-3eOG4THnQKXOing3AEmvQIoM2Uckww/embed?start=false&loop=false&delayms=30000" width="790"></iframe>
      </div>
      <div className="section">
        <h2>References</h2>
        <a href="http://w3.impa.br/~diego/software/rply/">
        <h4>PLY reading / writing library</h4></a>
        <a href="http://hhoppe.com/poissonrecon.pdf">
        <h4>Poisson Paper</h4></a>
        <a href="http://graphics.stanford.edu/data/3Dscanrep/">
        <h4>Library of Point Cloud Datasets</h4></a>
        <a href="http://casual-effects.blogspot.com/2016/03/opengl-sample-codeand-openvr-sample-code.html">
        <h4>OpenVR / OpenGL integration</h4></a>
        <a href="http://doc.cgal.org/latest/Poisson_surface_reconstruction_3/">
        <h4>CGAL Library Poisson Reconstruction Implementation</h4></a>
        <a href="https://github.com/mkazhdan/PoissonRecon#LINKS">
        <h4>Best Online Poisson Reconstruction Implementation</h4></a>
        <a href="http://www.cs.jhu.edu/~misha/MyPapers/ToG13.pdf">
        <h4>MESHLAB Poisson Reconstruction paper</h4></a>
        <a href="http://vr.tu-freiberg.de/scivi/?page_id=365">
        <h4>Short Poisson Explanation</h4></a>
        <a href="http://www.cc.gatech.edu/projects/large_models/">
        <h4>On PLY format</h4></a>
        <a href="http://www.cs.jhu.edu/~misha/MyPapers/SGP07a.pdf">
        <h4>Isosurface from Octree extraction paper</h4></a>
        <a href="https://github.com/kylemcdonald/ofxVCGLib/blob/master/vcglib/vcg/space/normal_extrapolation.h">
        <h4>VCG Normal Identification W/O Face Data</h4></a>
        <a href="http://www.cs.jhu.edu/~misha/MyPapers/ToG13.pdf">
        <h4>3rd Poisson Paper</h4></a>
        <a href="http://dl.acm.org/citation.cfm?id=37422">
        <h4>Original Marching Cubes Paper</h4></a>
        <a href="http://www.cs.carleton.edu/cs_comps/0405/shape/marching_cubes.html">
        <h4>An Implementation of the Marching Cubes Algorithm</h4></a>
        <a href="http://paulbourke.net/geometry/polygonise/">
        <h4>Polygonising a scalar field</h4></a>
        <a href="https://www.gamedev.net/resources/_/technical/game-programming/introduction-to-octrees-r3529">
        <h4>Creating Octrees</h4></a>
        <a href="https://www.cg.tuwien.ac.at/studentwork/VisFoSe98/eder/octree.htm">
        <h4>Octree Overview</h4></a>
        <a href="http://pointclouds.org/documentation/tutorials/normal_estimation.php">
        <h4>Using PCL to calculate vertex normals from the provided vertex data</h4></a>
        <a href="http://pointclouds.org/documentation/tutorials/octree.php">
        <h4>PCL OctTree nearest Neighbor</h4></a>
        <a href="http://www.cs.cmu.edu/afs/cs/academic/class/15456-s10/ClassNotes/nn.pdf">
        <h4>QuadTree nearest Neighbor</h4></a>
      </div>
      <div className="section">
        <h2>Team Contributions</h2>
        <h3>Bryce Schmidtchen</h3>
        <p></p>
        <ul className="no-list-style">
          <li><b>Formatting</b> : Enabled the program to scan edited PLY files</li>
          <li><b>Octree Data Structure</b> : Created Octree data structure based on agreed upon standards</li>
          <li><b>Indicator function</b> : Calculated the normal and point averages within each node - also made algorithm visualization</li>
          <li><b>Visualization</b> : Edited the base code from a previous project to enable mesh visualization</li>
        </ul>
        <p></p>
        <h3>Jesse Paterson</h3>
        <p></p>
        <ul className="no-list-style">
          <li><b>Marching Cubes Algorithm</b> : Wrote and adjusted Marching Cubes algorithm to fit our standards</li>
          <li><b>Spatial Hashing</b> : Developed spatial hashing on the Octree leaf nodes to find nearest neighboring nodes to a point using an expanding radius from the original node containing the point</li>
          <li><b>Indicator Function</b> : Developed preliminary geometric testing and inside/outside evaluation for average plane technique.</li>
        </ul>
        <p></p>
        <div>
          <img align="middle" src="/images/vmask/selfie.png" width="300px" alt="Bryce working on the visualization in Oculus Medium"/>
          <p>(Bryce making the visualization for our<br/>
          average plane indicator function in Medium!)</p>
        </div>
      </div>
    </div>
  </div>
</div>
;

const this_site_content =
<div className="project-content">
  <h2 className="subheading">A react based portfolio site</h2>
  <div className='project-details'>
    <div>
      <i></i>
    </div>
    <div>
      <p>
        <b className="highlight">Skills: </b>
        React, HTML, CSS, JS, Photoshop, Illustrator
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        Self
    </p>
    </div>
  </div>
  <div className="project-description">
    <p>
      I've made several iterations of this website. Each time I've made use of new skills to make the site more responsive
      and user friendly. The current site employs a number of micro animations and is built using a React Router to provide silky smooth transitions.
      Everything was built for a clean mobile experience and has been tested on a variety of browsers and screen sizes. I really enjoyed working with React on this project
      and I look forward to working with it more in the future.
    </p>
    <span className="title">Style Guide: Title</span><br/>
    <span className="heading">Heading</span><br/>
    <span className="subheading">Subheading</span><br/>
    <span className="body-text">Body Text</span>
  </div>
</div>
;

const treachery_content =
<div className="project-content">
  <h2 className="subheading">A 3D Animation Project</h2>
  <div className='project-details'>
      <div>
        <p>
          <b className="highlight">Skills: </b>
          Maya 3D Modeling, After Effects, Leadership
        </p>
      </div>
      <div>
        <p>
          <b className="highlight">Client: </b>
          3D Modeling and Animation, 2016
        </p>
      </div>
  </div>
	<div className="project-description">
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
    <iframe width="854" height="480" src="https://www.youtube.com/embed/0WMlBwnX5Mc" frameborder="0" allowfullscreen></iframe>
	</div>
</div>
;

const sixt33n_content =
<div className="project-content">
  <h2 className="subheading">A voice controlled car</h2>
	<div className="project-details">
    <div>
      <p>
        <b className="highlight">Skills: </b>
        C, Controls, Circuits
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        Designing Information Devices and Systems, 2016
      </p>
    </div>
  </div>
  <div className="project-description">
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
        A challenge that I encountered in this project was imperfect engineering in the parts we were given.
        The frame for the car caused the vehicle to curve when equal power was applied to both motors.
        We adjusted for this by continuously taking in the difference in distance traveled by each wheel and
        designing an algorithm which adjusted the input to the motors to maintain a straight course.
      </p>
      <h3>
        <a href="https://docs.google.com/document/d/1pbHqG-NaMbtg998hlRmfHgxjNHaWe0nvdeM8RTi0WwY/edit?usp=sharing"> Full Report </a>
      </h3>
      <iframe width="854" height="480" src="https://www.youtube.com/embed/_8MuFLKeg-E" frameborder="0" allowfullscreen></iframe>
  </div>
</div>
;

const vxpc_content =
<div className="project-content">
  <h2 className="subheading">Annual Virtual Reality Convention</h2>
	<div className='project-details'>
	    <div>
        <p>
	        <b className="highlight">Skills: </b>
	        Leadership, Organization, Networking, Web Development
        </p>
	    </div>
	    <div>
        <p>
	        <b className="highlight">Client: </b>
	        VR@Berkeley, 2016 and 2017
        </p>
	    </div>
	</div>
	<div className="project-description">
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
<div className="project-content">
  <h2 className="subheading">Flagship site for the College of Natural Resources</h2>
  <div className='project-details'>
    <div>
      <i>The flagship site for UC Berkeley College of Natural Resources</i>
    </div>
    <div>
      <p>
        <b className="highlight">Skills: </b>
        HTML, CSS, Drupal
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        College of Natural Resources
        (2014-2017)
    </p>
    </div>
  </div>
  <div className="project-description">
    <p>
      I have worked on a number of aspects of this website and many others in the
      College of Natural Resources since I joined the CNR Web Team.
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
<div className="project-content">
  <h2 className="subheading">A Virtual Reality telepresence vehicle</h2>
  <div className='project-details'>
      <div>
        <p>
          <b className="highlight">Skills: </b>
          C#, Node.js, Unity
        </p>
      </div>
      <div>
        <p>
          <b className="highlight">Client: </b>
          Treehacks, Self
          (2015)
        </p>
      </div>
  </div>
  <div className="project-description">
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

const graphics_content =
<div className="project-content">
  <h2 className="subheading">A variety of low level graphics projects</h2>
  <div className='project-details'>
    <div>
      <p>
        <b className="highlight">Skills: </b>
        Linear Algebra, Physics, C++
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        CS 184: Computer Graphics and Imaging, Spring 2017
    </p>
    </div>
  </div>
  <div className="project-description">
    <div className="mini-project">
      <div className="project-title">
        <h2 align="middle">Project 1: Rasterizer</h2>
      </div>
      <div className="section">
        <h3 align="middle">Overview</h3>
        <p>Through this project, I built a rudimentary rasterization method which can be
        adapted to use a variety of techniques, including bilinear and trilinear sampling
        and variable sampling rates to display textures and colors across polygons. Through
        this project, I learned a lot about different anti-aliasing techniques and mipmap
        methods to speed up rendering.</p>
      </div>

      <h3 align="middle">Part 1: Rasterizing single-color triangles</h3>
      <div className="section">
          <p className="section-description">
              My approach to rasterizing triangles is to find the minimum
              and maximum of X and Y, then use that to create a bounding box
              around the triangle which is sampled to check if the center of each point is
              inside or outside of the triangle. The method used to check if the center
              of each point is inside the triangle is also taking care of the edge cases by only
              classifying points that lie on an edge as being inside the triangle if
              they lie on a "top edge" or a "left edge." Each point classified as
              being inside the triangle then has it's Color set to the Color specified.
          </p>
          <div className="section-images">
              <img src="/images/rasterizer/part1.png" className="section-img"/>
          </div>
      </div>

      <h3 align="middle">Part 2: Antialiasing triangles</h3>

      <div className="section">
          <div className="section-description">
            <p>
                <b>rasterize_triangle</b><br/>
                In order to implement supersampling, I added an additional
                set of for loops that run through the sample x and y of a point (up to the
                sqrt of the sample_rate).The sample_x and sample_y are used to calculate
                the coordinate of the sample in relation to the overall image. The sample
                coordinate is then tested to see if it is inside the triangle, and if so, it is
                sent to the fill_color function to be included as 'colored' in the
                sub_pixel matrix.
            </p>
            <p>
                <b>get_pixel_color</b> <br/>
                To properly color the pixels based on their sub_pixel matrix,
                get_pixel_color() takes an average of the color for all pixels
                within the sub_pixel matrix, and returns that average to samplebuffer.
            </p>
            <p>
              <br/>
              <i>Displayed on the left from top to bottom: Sampling rate of 1, 4, 16.</i>
            </p>
          </div>
          <div className="section-images">
              <img src="/images/rasterizer/rate1.png" className="section-img2"/>
              <img src="/images/rasterizer/rate4.png" className="section-img2"/>
              <img src="/images/rasterizer/rate16.png" className="section-img2"/>
          </div>
      </div>

      <h3 align="middle">Part 3: Transforms</h3>

      <div className="section">
          <div className="section-description">
          <p>
              I used a series of rotation and translation transforms to turn the robot on the top
              into my more dynamic robot on the bottom, who is running and pointing at something.
          </p>
          </div>
          <div className="section-images">
              <img src="/images/rasterizer/robot.png" className="section-img2"/>
              <img src="/images/rasterizer/myrobot.png" className="section-img2"/>
          </div>
      </div>


      <h3 align="middle">Part 4: Barycentric coordinates</h3>

      <div className="section">
          <div className="section-description">
          <p>
              Barycentric coordinates turn cartesian coordinates of a point into a weighted average
              of three other points (in the case of points within a triangle, these would be the three
              vertices of the triangle). The weights uniquely define the converted point and are themselves
              defined as being a ratio of the area of the triangle whose vertices are the converted point and the two vertices
              that the weight is not related to, over the area of the triangle defined by the three vertices.

              Colors can be blended across the 3 vertices using this same weighted average in relation to
              the color of each vertex.
          </p>
          </div>
          <div className="section-images">
              <img src="/images/rasterizer/triangle.png" className="section-img2"/>
              <img src="/images/rasterizer/colorwheel.png" className="section-img2"/>
          </div>
      </div>

      <h3 align="middle">Part 5: "Pixel sampling" for texture mapping</h3>

      <div className="section">
          <div className="section-description">
          <p>
              <b>Pixel Sampling</b> <br/>
              Pixel sampling is a method which determines what colors to pull from a texture to
              color an image, when the pixels of the texture are not 1:1 with the pixels of the
              image.
          </p>
          </div>
          <div className="section-images">
          </div>
      </div>

      <div className="section">
          <div className="section-description">
            <p>
                <b>nearest_sampling</b> <br/>
                Nearest sampling determines what color to pull from a texture by examining the color
                of the pixel in the texture which is closest to the pixel in the image and then using
                that color.
            </p>
            <p>
                <i>Displayed on the left from top to bottom: Nearest Sampling method with a rate of 1, 16.</i>
            </p>
          </div>
          <div className="section-images">
              <img src="/images/rasterizer/nearest1.png" className="section-img2"/>
              <img src="/images/rasterizer/nearest16.png" className="section-img2"/>
          </div>
      </div>

      <div className="section">
          <div className="section-description">
            <p>
                <b>bilinear_sampling</b> <br/>
                Bilinear sampling takes an average of the colors of the closest 4 texture pixels to the image pixel coordinate.
                It assigns weights to each of the texture pixel colors as a ratio how close they are to the image pixel coordinate
                over the total distance between the texture pixels. This interpolation results in a more even color gradient, and
                smoother lines in areas that the nearest sampling method is more blocky. (This effect can be seen by comparing the images to the left.)
                This effect is especially noticable at lower sampling rates because at these lower
                sampling rates, there will be less subsamples to average across for nearest sample methods, while
                bilinear sampling has built in interpolation/averaging.
            </p>
            <p>
                <i>Displayed on the left from top to bottom: Bilinear Sampling method with a rate of 1, 16.</i>
            </p>
          </div>
          <div className="section-images">
              <img src="/images/rasterizer/bilinear1.png" className="section-img2"/>
              <img src="/images/rasterizer/bilinear16.png" className="section-img2"/>
          </div>
      </div>


      <h3 align="middle">Part 6: "Level sampling" with mipmaps for texture mapping</h3>

      <div className="section">
          <div className="section-description">
            <p>
                Level Sampling<br/>
                Level sampling is adjusting the texture file used in certain areas to match the pixel
                texture footprint and approximate the correct result in order to reduce aliasing. A mipmap is
                constructed which contains the texture prefiltered at multiple resolutions, at each level
                containing a map which is 1/4 the size of the previous map. This mipmap takes up 4/3 of the original size in memory.
            </p>
            <p>
                Implementation<br/>
                The mipmap level is determined by analyzing the texture footprint of a
                pixel on a texture using one-pixel difference vectors du and dv. The texture footprint
                is based on how many texture pixels are included in an image pixel's space.
                Using a Nearest Level approach, the level that the color for the image pixel would be
                pulled from would be the Level which most closely matches a 1:1 pixel ratio. This approach
                results in one of the fastest rendering times, and a generally smoother image.
                My Trilinear approach takes the closest two levels and performs an interpolation of their
                bilinear sampled colors at the image pixel coordinate. This approach results in a smoother image
                and faster rendering time than a non level-sampled approach.
            </p>
            <p>
                <i>Images (From Top to Bottom)<br/>
                L_ZERO and P_NEAREST at a sampling rate of 4<br/>
                L_ZERO and P_LINEAR at a sampling rate of 4<br/>
                L_NEAREST and P_NEAREST  at a sampling rate of 4<br/>
                L_NEAREST and P_LINEAR at a sampling rate of 4<br/>
                L_LINEAR and P_LINEAR at a sampling rate of 16
                </i>
            </p>
          </div>
          <div className="section-images">
              <img src="/images/rasterizer/lz_pn.png" className="section-img"/>
              <img src="/images/rasterizer/lz_pl.png" className="section-img"/>
              <img src="/images/rasterizer/ln_pn.png" className="section-img"/>
              <img src="/images/rasterizer/ln_pl.png" className="section-img"/>
              <img src="/images/rasterizer/tri.png" className="section-img"/>
          </div>
      </div>
    </div>
  </div>
</div>
;

const ProjectAPI = {
  projects: [
    { url: "isaacs", title: "ISAACS", body: isaacs_content, image:'/images/isaacs/AR2.png', tinyImage:'/images/isaacs/tinyAR2.png' },
    { url: "mesh-reconstruction", title: "Mesh Reconstruction", body: mesh_reconstruction_content, image:'/images/vmask/hand_mesh_square.png', tinyImage:'/images/vmask/tinyhand_mesh_square.png' },
    { url: "graphics", title: "Graphics", body: graphics_content, image:'/images/pathtracer_website/images/banana_square.png', tinyImage:'/images/pathtracer_website/images/tinybanana_square.png' },
    { url: "vxpc", title: "Virtual Experience Convention", body: vxpc_content, image:'/images/vxpc/vxpc_square.jpg', tinyImage:'/images/vxpc/tinyvxpc_square.jpg' },
    { url: "nature", title: "Nature", body: nature_content, image:'/images/nature/nature_square.jpg', tinyImage:'/images/nature/tinynature_square.jpg' },
    { url: "wall-e", title: "Wall-E", body: walle_content, image:'/images/walle/walle.jpg', tinyImage:'/images/walle/tinywalle.jpg' },
    { url: "sixt33n", title: "SIXT33N", body: sixt33n_content, image:'/images/sixt33n/sixt33n.jpg', tinyImage:'/images/sixt33n/tinysixt33n.jpg' },
    { url: "treachery", title: "Treachery of Animation", body: treachery_content, image:'/images/treachery/animation_square.png', tinyImage:'/images/treachery/tinyanimation_square.png' },
    { url: "this-site", title: "Personal Site", body: this_site_content, image:'/images/this_site/this_site.jpg', tinyImage:'/images/this_site/tinythis_site.jpg' },
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

const ProjectsPage = AnimatedWrapper(ProjectsRouter);
export default ProjectsPage;
