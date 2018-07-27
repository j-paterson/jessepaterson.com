import React, { Component } from "react";

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
                sent to fill_color() to be included as 'colored' in the
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
    <div>
      <div>
        <title>CS 184 Mesh Editor</title>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro" rel="stylesheet" />
        <h2 align="center">Project 2: Mesh Editor</h2>
        <div>
          <h3 align="center">Part 1: Bezier curves with 1D de Casteljau subdivision</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              {/*<p>
            <ul>
                <li>Take a look at the provided <em>bzc</em> files and create your own Bezier curve with <strong>six (6)</strong> control points of your own choosing. Use this Bezier curve for your screenshots below.</li>
                <li>Show screenshots of each step of the evaluation from the original control points down to the final evaluated point. Use the keyboard command <strong>E</strong> to step through. Toggle <strong>C</strong> to show the completed curve as well.</li>
                <li>Move the points around and modify the value of <span class="MathJax_Preview" style="color: inherit; display: none;"></span><span class="MathJax" id="MathJax-Element-42-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>t</mi></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-279" style="width: 0.388em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.278em; height: 0px; font-size: 124%;"><span style="position: absolute; clip: rect(1.762em 1000.3em 2.642em -1000.02em); top: -2.472em; left: 0em;"><span class="mrow" id="MathJax-Span-280"><span class="mi" id="MathJax-Span-281" style="font-family: STIXGeneral-Italic;">t<span style="display: inline-block; overflow: hidden; height: 1px; width: 0.003em;"></span></span></span><span style="display: inline-block; width: 0px; height: 2.477em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.065em; border-left: 0px solid; width: 0px; height: 0.822em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math></span></span> by scrolling and show us a slightly different Bezier curve.</li>
            </ul>
        </p>*/}
              <p>
                <b>de Casteljau Algorithm</b><br />
              </p><ul>
                <li> Add points using linear interpolation: A fractional variable t is used to create a ratio (1-t) which determines the location on each vector the point is inserted.
                </li>
                <li> Use “Corner cutting” recursive subdivision to create a line between each set of the previously interpolated points on lines which are connected.
                </li>
                <li> Repeat recursively to create a pyramid of coefficients
                </li>
                <li> It is common to chain together many low-order Bezier curves such as Piecewise cubic Bezier curves.
                </li>
              </ul>
              {/*            borrowing slideshow from https://themarklee.com/2013/12/26/simple-diy-responsive-slideshow-made-html5-css3-javascript/*/}
              {/* <div className="diy-slideshow">
                <figure className="show"><img src="/images/graphics_proj2/bc1_1.png" alt width="100%" />
                  <figcaption>First evaluation</figcaption></figure>
                <figure><img src="/images/graphics_proj2/bc1_2.png" alt width="100%" />
                  <figcaption>Second evaluation</figcaption></figure>
                <figure><img src="/images/graphics_proj2/bc1_3.png" alt width="100%" />
                  <figcaption>Third evaluation</figcaption></figure>
                <figure><img src="/images/graphics_proj2/bc1_4.png" alt width="100%" />
                  <figcaption>Fourth evaluation</figcaption></figure>
                <figure><img src="/images/graphics_proj2/bc1_5.png" alt width="100%" />
                  <figcaption>Fourth evaluation showing curve</figcaption></figure>
                <figure><img src="/images/graphics_proj2/bc1_6.png" alt width="100%" />
                  <figcaption>With altered t value</figcaption></figure>
                <figure><img src="/images/graphics_proj2/bc2_1.png" alt width="100%" />
                  <figcaption>With moved points</figcaption></figure>
                <span className="prev">«</span>
                <span className="next">»</span>
              </div> */}
              <p />
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/decasteljau1.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
              <img src="/images/graphics_proj2/decasteljau2.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
            </div>
          </div>
          <h3 align="center">Part 2: Bezier surfaces with separable 1D de Casteljau subdivision</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              <p>
                <b>Bicubic Bezier Surfaces</b><br />
              </p><ul>
                <li> Bezier surfaces can be represented through five interpolations using de Casteljau's algorithm on a 4x4 array of control points
                </li>
                <li> Each line of 4 control points in the 4x4 array is interpolated to form a cubic Bezier curve
                </li>
                <li> Each of these curves can be parameterized by an input parameter U (0-1) which moves a point along each of the 4 curves.
                </li>
                <li> Those 4 moving points can be interpreted for a moving cubic Bezier curve going in the other direction, which sweeps out along the Bicubic Bezier surface
                </li>
                <li> This final moving Bezier curve can be sampled at each point (u, v) in order to create the surface.
                </li>
              </ul>
              <p />
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/bicubicbezier.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
              <img src="/images/graphics_proj2/part2.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
            </div>
          </div>
          <h3 align="center">Part 3: Average normals for half-edge meshes</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              <p>
                In order to obtain the average normal vector of the faces surrounding a particular vertex, I first
                obtained the halfedge for the initial vertex. I took it's twin and obtained the
                vertex at the source of that half-edge and subtracted it's position from the position
                of the initial vertex in order to obtain my first 3D vector. I traversed to the next
                half-edge, then took the vertex of it's twin and obtained my second 3D vector through
                a similar process. I obtained the cross product of these 3D vectors and added it to
                my normal vector.
              </p>
              <p>
                I repeated this process until I was back at the original halfedge of the initial vertex.
                I then divided my normal vector by the number of faces I had traversed in order to obtain
                an average.
              </p>
              <p>
                On the left you can see the difference between using the face normals (top image)
                and a vertex normal based on the average of the surrounding face normals (bottom image).
              </p>
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/facenormals.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
              <img src="/images/graphics_proj2/avgvertnormals.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
            </div>
          </div>
          <h3 align="center">Part 4: Half-edge flip</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              <p>
                I went through a diagram of what every object involved in the flip would look like before and after the flip.
                I grabbed all those objects and then reset their pointers to what they would be in the after stage of the diagram.
                I had an issue with it loading forever, but that cleared up after I reduced a few unessential pointer settings.
              </p>
              <p>
                The images on the left show before switching edges (top image) and after switching a couple (bottom image).
              </p>
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/before4.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
              <img src="/images/graphics_proj2/after4.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
            </div>
          </div>
          <h3 align="center">Part 5: Half-edge split</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              <p>
                I implemented this section in a similar method to how I handled the previous section on flips, working through a
                set of before and after diagrams. I realized after I finished implementing it and ran into some errors testing that
                I had assumed the half-edges were running clockwise instead of counter clockwise. I went back and redid the flip
                operation and then redid the split operation.
              </p><p>
              </p><p>
                The images on the left show an unaltered mesh (top), a mesh with splits (middle) and a mesh with both splits and flips (bottom).
              </p>
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/unaltered.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
              <img src="/images/graphics_proj2/splits.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
              <img src="/images/graphics_proj2/splitsnflips.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
            </div>
          </div>
          <h3 align="center">Part 6: Loop subdivision for mesh upsampling</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              <p>
                I implemented the Loop subdivision step by step.
              </p><ol>
                <li>I started by computing new positions for all the vertices in the input mesh, using the Loop subdivision rule. I also used this step to
                  mark each vertex as being a vertex of the original mesh.
                </li>
                <li>Computed the updated midpoint vertex positions associated with edges (again using the Loop subdivision rule, based on the current positions of the points), and
                  stored this value it in Edge::newPosition.
                </li>
                <li>Split every edge in the mesh that was not connected to a new vertex. I used this step to insert the newPosition held in the edge into its midpoint.
                </li>
                <li>Flipped any new edge that connected to an old and new vertex.
                </li>
                <li>Finally, copied all new vertex positions into the final Vertex::position.
                </li>
              </ol>
              Loop subdivision drastically softens sharp edges and corners. It is possible to slightly alleviate this effect
              by splitting the corners of the square multiple times.<br /><br />
              In the case of the square, due to the slant of the edges across the 6 faces, subdivision
              will result in an assymetric, albeit smoother object. By splitting each of the edges that go
              across the faces and balancing out this slant, it is possible to obtain a much more symmetrical subdivision.
              <p />
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/6_1.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '50%', display: 'block'}} />
              <img src="/images/graphics_proj2/6_2.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '50%', display: 'block'}} />
              <img src="/images/graphics_proj2/6_3.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '50%', display: 'block'}} />
              <img src="/images/graphics_proj2/6_4.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '50%', display: 'block'}} />
            </div>
          </div>
          <h3 align="center">Part 7: Fun with shaders</h3>
          <div className="section">
            <div style={{width: '50%', float: 'left'}}>
              <p>
                Here is the model of the teacup using the custom Blinn-Phong shader I made.
              </p>
            </div>
            <div style={{height: '100%', width: '50%', display: 'block', float: 'right'}}>
              <img src="/images/graphics_proj2/phong.png" style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', display: 'block'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

export default graphics_content;
