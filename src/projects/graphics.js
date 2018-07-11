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
  </div>
</div>

export default graphics_content;
