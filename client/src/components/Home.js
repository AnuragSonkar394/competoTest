import React from 'react';
import "../App.css";
import logo from "./logo.jpg";
import image from "./resize-16482947721034068559BG.jpg";
import pic1 from "./BALL.png";
import pic2 from "./BADMINTON.png";
import pic3 from "./NET.png";
import winner1 from "./Image/Winner1.png";
import winner2 from "./Image/Winner2.jpg";
import winner3 from "./Image/Winner3.jpg";
import umpire from "./Image/handshake.png";
import handshake from "./Image/umpire.png";
import Anurag from "./Image/Anurag.jpg";
import Prashant from "./Image/Prashant.png";
import Priyesh from "./Image/Priyesh.jpg";

function Home() {
  return (
    <>
      <div className=' bg-black text-white '  >




        <div id="carouselExampleIndicators" class="carousel slide w-100 mx-auto " data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner ">
            <div class="carousel-item active">
            
              <img class="d-block mx-auto mb-5 img-fluid w-100" src={pic1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block  mx-auto  mb-5 img-fluid w-100" src={pic2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block  mx-auto  mb-5 img-fluid w-100" src={pic3} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>




        <h1 class="text-center"> SOME ACHIEVERS</h1>
        <div class="card-deck m-5 mb-0">
          <div class="card">
            <img class="card-img-top" src={winner1} alt="Card image cap" />
            <div class="card-body">


              <h5 class="text-info "><span class="material-icons align-bottom">groups</span>TEAM APOLO</h5>
              <p class="text-info">WINNERS OF YT5 CONTEST</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={winner2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="text-info font-weight-bold"><span class="material-icons align-bottom">groups</span>TEAM LUTHANA</h5>
              <p class="text-info">WINNER OF CONTEST J7 LUDHIYANA</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={winner3} alt="Card image cap" />
            <div class="card-body">
              <h5 class="text-info"><span class="material-icons align-bottom ">groups</span>TEAM AXT</h5>
              <p class="text-info">WINNERS OF HARPIT TOUNAMENT</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <h1 class="text-center mt-5"> WHAT WE DO</h1>
      <div class="row mt-4 ml-3 pb-5">
        <div class="col border-left  border-white"> <h3 class="text-center"> WE CONDUCT TOURNAMENTS </h3>
        

          <p > We organise very exciting tournaments contests and give a online plateform COMPETO from where anyone can
            can register in any of the tournament contest. There is a lot of sports categories like Cricket, Football,
            Badminton, Hockey, Chess, Carrom, Kabaddi and many more.  </p>
        </div>
        <div class="col"><div class="text-center ">
          <img src={handshake} class="rounded p-3 w-20 h-10 border border-white  rounded-circle" alt="..." /></div></div>
        <div class="w-100 mt-5 mb-5  "></div>
        <div class="col  border-left  border-white"><div class="text-center  ">
          <img src={umpire} class="rounded p-3 w-20 h-10 border border-white  rounded-circle" alt="..." />
        </div></div>
        <div class="col  ">
        <div class="col   border-dark "> <h3 class="text-center"> WE PROVIDE PLATEFORM </h3>
        

        <p > Competo provides an plateform to other tournament organisers who want to conduct tournament, can use our plateform competo
        for publishing their contests around the people. We forward all the participating teams through our plateform COMPETO to organisers.
         </p>
      </div>
        </div>
      </div>


      <h1 class="text-center mt-5 "> WH0 WE ARE</h1>
      <div class="container  mt-5 pb-5">
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="our-team  border border-white">
                <div class="pic">
                    <img src={Anurag} alt="team member" class="img-responsive"/>
                </div>
                <div class="content">
                    <h3 class="title">ANURAG SONKAR</h3>
                    <span class="post"> TECHNICAL DIRECTOR & PRESIDENT </span>
                   
                    <div class="footer-social-icon">

                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class=" our-team border border-white ">
                <div class="pic">
                    <img src={Prashant} alt="team member" class="img-responsive"/>
                </div>
                <div class="content">
                    <h3 class="title">PRASHANT GUPTA</h3>
                    <span class="post">TECHNICAL DIRECTOR & PRESIDENT</span>
                    <div class="footer-social-icon">

                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
            </div>
        </div>
       <div class="col-md-4 col-sm-6">
            <div class="our-team border border-white">
                <div class="pic">
                    <img src={Priyesh} alt="team member" class="img-responsive"/>
                </div>
                <div class="content">
                    <h3 class="title">PRIYESH SHARMA</h3>
                    <span class="post">MANAGING DIRECTOR & PRESIDENT</span>
                    <div class="footer-social-icon">

                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>

       



      </div>
      


      




      <footer class="footer-section bg-black">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>Paidleganj, chandigarh</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>9919164486</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>competo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html"><img src={logo} class="img-fluid logo" alt="logo" /></a>
                  </div>
                  <div class="footer-text">
                    <p></p>
                  </div>
                  <div class="footer-social-icon">

                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Expert Team</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Latest News</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Collab With Us</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home