import React, { Component } from "react";

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
            <p>According the Poisson Reconstruction algorithm,
              solving for the indicator function X involves ensuring that
              the projection of the Laplacian of X onto the space of base functions is
              closest to the projection of the divergence of the vector field.</p>
            <p>We took a shortcut in the section and instead developed our own indicator function based on the point and normal averaged plane within a given node.</p>
            <p>The image on the right illustrates the algorithm that we designed and implemented for our indicator function. This function was required by Marching Cubes in order to extract the mesh from our Octree. This algorithm begins by taking the points within any given Octree leaf node and averaging their positions and normals. Once these averages are found, we can find the equation for a plane using this averaged point and normal. This plane is acts like an average though all of the points. Following this, we take the corner points of the given Octree leaf node, and project them onto the averaged plane. We then find the vector between the projected point and the current corner being worked with. Depending on the orientation of this vector compared to the plane’s normal vector, we can tell whether this corner is inside or outside the surface.</p>
            <p>This image was created using Oculus’ Medium sculpting application to visually illustrate our algorithm. The Octree leaf node’s bounding box can be seen in green and the corners are in purple with their projected points also in purple. The point cloud is illustrated in blue and the normal vectors can be seen throughout the image.</p>
          </div>
        </li>
        <li>
          <h4>Marching Cubes Algorithm</h4>
        </li>
        <li className="no-list-style">
          <p>In order to extract the final mesh, we implemented the Marching Cubes Algorithm as detailed in the
          <a href="http://dl.acm.org/citation.cfm?id=37422">'Marching cubes: A high resolution 3D surface construction algorithm'</a> paper.
          Using the averaged plane indicator function that we developed, we were able to determine which points of an octree node were inside of the mesh.
          Each corner corresponded to a bit in an index (0 for outside, 1 for inside).</p>
          <p>This index is then used to extract a list of connected edges from our 'triangle table' which contains 256 possible configurations
          (We borrowed our triangle table from Paul Bourke's article on
          <a href="http://paulbourke.net/geometry/polygonise/">polygonising a scalar field</a>).
          We calculated the midpoints of each edge and used those as the triangle vertices to be inserted into the mesh.</p>
          <p>We started testing using a number of geometric indicator functions and later switched to the averaged plane indicator
          function we developed in order to approximate the mesh of more complicated objects.</p>
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

export default mesh_reconstruction_content;
