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
<div className="project-content">
	<div className='project-details'>
    <div>
      <i>Holographic drone interface</i>
    </div>
    <div>
      <p>
	      <b className="highlight">Skills: </b>
	      C#, Unity, ROS, Computer Vision, Drones, Augmented and Virtual Reality interfaces
      </p>
    </div>
    <div>
      <p>
      <b className="highlight">Client: </b>
      Center for Augmented Cognition
      (2016-2017)
      </p>
    </div>
	</div>
	<div className="project-description">
	  <p>
	    The goal of this project was to create an Augmented Reality interface
	    for controlling drones through the Microsoft Hololens. There were many
	    teams working on different aspects of the project, from system controls
	    to interaction design. As project priorities shifted, I shifted between teams to
	    work on what I felt were the most critical parts of the project.
	  </p>
	  <p>
	    On the design team, I conducted a user research study in which I ran several
	    interviews with members of the UAV club. I  used the data gathered to identify
	    several areas in which an Augmented Reality interface would be useful for drone users.
	    Based on these applications and taking into account latency limitations, I designed a
	    framework for the interface. The framework included a bounding box which
	    the drone would stay in, the ability to set camera angle and a path through nodes that
	    could be moved through 3d space and angled similar to a Bézier curve. As a culmination
	    of my experience and research on this project, I wrote an essay
	    on Augmented Reality UI/UX.
	  </p>
	  <p>
	    I later joined the Simultaneous Location and Mapping team to work on implementation
	    for the drone computer vision algorithms. On this team, I learned how to setup and adjust
	    the Robotic Operating System (ROS) that we use as a server for communication between the
	    drone and a computer. This system will make it possible for us to use our interface for
	    multiple drones at the same time.
	  </p>
    <p>
      <a href="http://citris-uc.org/meet-the-award-recipients-of-the-first-microsoft-hololens-academic-research-grants/">Meet the award recipients of the first microsoft hololens academic research grants</a>
    </p>
    <p>
      <a href="https://hololens.reality.news/news/uc-berkeley-team-commands-drone-fleet-with-hololens-0176671/">UC Berkeley team commands drone fleet with hololens</a>
    </p>
    <p>
      <a href="http://engineering.berkeley.edu/magazine/fall-2016/seeing-believing">Seeing is believing - leveling up with augmented reality</a>
    </p>
	</div>
</div>
;

const treachery_content =
<div className="project-content">
  <div className='project-details'>
      <div>
          <i>3D Animation Project</i>
      </div>
      <div>
        <p>
          <b className="highlight">Skills: </b>
          Maya, After Effects, Leadership
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
	</div>
</div>
;

const sixt33n_content =
<div className="project-content">
	<div className="project-details">
    <div>
        <i>A voice controlled car</i>
    </div>
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
      <p>
        <a href="https://docs.google.com/document/d/1pbHqG-NaMbtg998hlRmfHgxjNHaWe0nvdeM8RTi0WwY/edit?usp=sharing"> Full Report </a>
      </p>
  </div>
</div>
;

const vxpc_content =
<div className="project-content">
	<div className='project-details'>
	    <div>
	        <i>Berkeley Virtual Reality Convention</i>
	    </div>
	    <div>
        <p>
	        <b className="highlight">Skills: </b>
	        Leadership, Organization, HTML, CSS
        </p>
	    </div>
	    <div>
        <p>
	        <b className="highlight">Client: </b>
	        VR@Berkeley, 2016
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
  <div className='project-details'>
      <div>
          <i>A VR telepresence vehicle</i>
      </div>
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

const this_site_content =
<div className="project-content">
  <div className='project-details'>
    <div>
      <i></i>
    </div>
    <div>
      <p>
        <b className="highlight">Skills:</b>
        React, HTML, CSS, JS, Photoshop, Illustrator
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        Personal Project
    </p>
    </div>
  </div>
  <div className="project-description">
    <p>
      I've made several iterations of my professional website, each time making use of new skills I've learned to make the site more responsive
      and user friendly. The current site employs a number of micro animations and is built using a React Router to provide silky smooth transitions.
      Everything was built for a mobile experience and has been tested at a variety of screen sizes. I really enjoyed working with React on this project
      and I look forward to working with it more in the future.
    </p>
  </div>
</div>
;

const graphics_content =
<div className="project-content">
  <div className='project-details'>
    <div>
      <i>A variety of low level graphics projects</i>
    </div>
    <div>
      <p>
        <b className="highlight">Skills: </b>
        Linear Algebra, Physics of light, C++
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
    <p>
      <h3>Coming Soon!</h3>
    </p>
  </div>
</div>
;

const mesh_reconstruction_content =
<div className="project-content">
  <div className='project-details'>
    <div>
      <i>A point cloud to mesh converter</i>
    </div>
    <div>
      <p>
        <b className="highlight">Skills: </b>
        Linear Algebra, Vector Calculus, C++
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Client: </b>
        CS 184: Computer Graphics and Imaging, Spring 2017
      </p>
    </div>
    <div>
      <p>
        <b className="highlight">Partner: </b>
        Bryce Schmidtchen
      </p>
    </div>
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
        <li className="subheading">The mathematical rigor of the Poisson solution
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
        <li className="subheading">Octree Construction
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
        <li className="subheading">Spatial Hashing
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
          <li className="subheading">Be willing to pivot
            <ul className="no-list-style">
              <li>
                <p>When faced with a seemingly insurmountable task that is required, don’t be afraid to construct your own version of the algorithm to circumvent the problem and still reach the solution. After spending such a significant amount of time attempting to implement the Poisson solution to the indicator function without success, we eventually came to the conclusion that we needed to find another way to accomplish this. We were extremely committed to getting the Poisson solution to work from the beginning. However, over time we learned how necessary it is to realize when you have to pivot and change your direction in order to accomplish your ultimate goal.</p>
              </li>
            </ul>
          </li>
          <li className="subheading">Exposure to numerous new graphics concepts
            <ul className="no-list-style">
              <li>
                <p>We learned a large deal of information from having to do such a great amount of research on point clouds, the Poisson algorithm, and all of the constituents part necessary to make it function such as marching cubes. We learned about many of the different methods that point clouds are processed, how different reconstructions algorithms mathematically function, and how both impactful and useful marching cubes has been in the graphics industry.</p>
              </li>
            </ul>
          </li>
          <li className="subheading">Thinking and imagining things spatially
            <ul className="no-list-style">
              <li>
                <p>Through having to construct Octrees, split bounding boxes, spatial hash, march through cubes, and construct an indicator function among other things, we both gained skill in conceptualizing how to accomplish different combinations of 3D graphics tasks.</p>
              </li>
            </ul>
          </li>
          <li className="subheading">Closely evaluate mathematical rigor
            <ul className="no-list-style">
              <li>
                <p>When setting out on this project, we read over the paper and background information and felt that we would be able to implement the mathematics detailed in the paper with enough research. However, as we continually tried to implement the discrete Poisson solution algorithm detailed in the paper, it seemed more and more infeasible in our given time frame to accomplish it. Therefore, we learned how necessary it is to closely evaluate all of the small implementation details when setting certain goals.</p>
              </li>
            </ul>
          </li>
          <li className="subheading">“The best way out is always through” - Robert Frost
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
        <ul>
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

const ProjectAPI = {
  projects: [
    { url: "isaacs", title: "ISAACS", body: isaacs_content, image:'/images/isaacs/AR2.png' },
    { url: "mesh-reconstruction", title: "Mesh Reconstruction", body: mesh_reconstruction_content, image:'/images/vmask/hand_mesh_square.png' },
    { url: "wall-e", title: "Wall-E", body: walle_content, image:'/images/walle/walle.jpg' },
    { url: "sixt33n", title: "SIXT33N", body: sixt33n_content, image:'/images/sixt33n/sixt33n.jpg' },
    { url: "vxpc", title: "Virtual Experience Convention", body: vxpc_content, image:'/images/vxpc/vxpc_logo.jpg' },
    { url: "nature", title: "Nature", body: nature_content, image:'/images/nature/nature_square.jpg' },
    { url: "this-site", title: "Personal Site", body: this_site_content, image:'/images/this_site/this_site.jpg' },
    { url: "treachery", title: "Treachery of Animation", body: treachery_content, image:'/images/treachery/animation_square.png' },
    { url: "graphics", title: "Graphics", body: graphics_content, image:'/images/pathtracer_website/images/banana_square.png' },
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
	render() {
		const { project: { title, body } } = this.state;
		const goBackStyle = {
			transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
					inputRange: [0,1],
					outputRange: ["-24px", "0px"]
				})},0)
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
  // var projectelements = document.querySelector(".projects-grid").getElementsByClassName('project')
  // for(var i = 0; i < projectelements.length; i++){
  //   // projectelements[i].classList.add("visible");
  //   // projectelements[i].classList.remove("invisible");
  // }
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
            alt="Project display"
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
  							<li key={i} className="project">
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
  <Switch onUpdate={() => window.scrollTo(0, 0)}>
    <Route exact path='/projects' component={Projects}/>
    <Route path='/projects/:url' component={Project}/>
  </Switch>
)

const ProjectsPage = AnimatedWrapper(ProjectsRouter);
export default ProjectsPage;
