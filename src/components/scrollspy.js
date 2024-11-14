import { Component} from 'react'

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from './imageGallery';
import Skills from './skills';
import Photoshop from '../Images/Skills/Photoshop.png';
import Illustrator from '../Images/Skills/Illustrator.png';
import Canva from '../Images/Skills/Canva.png';


class ScrollSpy extends Component  {
  skills = [
    {
      name: 'PhotoShop',
      image: Photoshop, // Replace with actual image path
      description: '95%'
    },
    {
      name: 'Illustrator',
      image: Illustrator, // Replace with actual image path
      description: '90%'
    },
    {
      name: 'Canva',
      image: Canva, // Replace with actual image path
      description: '50%'
    },
    // Add more skills as needed
  ];
    render(){

      return (
        <div className="row my-5" id='about'>
          <div className="col-12 col-md-4 p-sm-3">
          <h3 data-aos="zoom-out-right">Get to know me </h3>

            <ListGroup id="list-example" data-aos="fade-up" data-aos-duration="1000" className='py-4'>
              <ListGroup.Item action href="#list-item-1">Skills</ListGroup.Item>
              {/* <ListGroup.Item action href="#list-item-2">Experience</ListGroup.Item> */}
              <ListGroup.Item action href="#list-item-3">Gallery</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-12 col-md-8 p-sm-3 mt-5 mt-md-0 ">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example scroll_UI  scrollspy__opc"
              tabIndex="0"
              
              style={{ height: '400px', overflowY: 'scroll' }} 
            >
            <div id="list-item-1" className='px-4 p-sm-0'>
                <h4  className='mb-3' data-aos="fade-right"  data-aos-duration="1000">Skills</h4>
                <div className="d-flex  mb-3 flex-wrap gap-3 mb-5 me-md-5">
                  <Skills skills={this.skills}/>                    
                </div>
            </div>

            {/* <div id="list-item-2" className='px-4 p-sm-0'> 
                <h3 data-aos="fade-right"  data-aos-duration="1000">Experience</h3>
                 <Experience exp={this.state.experiences} /> 
            </div>    */}

            <div id="list-item-3" className='px-2 p-sm-0'>
                <h4>Gallery</h4>
                <div className="d-flex  mb-3 flex-wrap gap-3 mb-5 ">
                  <ImageGallery />                    
                </div>
                
            </div>

            </div>
          </div>
        </div>
      );
    }
}



export default ScrollSpy;
