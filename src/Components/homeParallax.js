import React from 'react';
import '../css/homeParallax.scss';
import { Parallax } from 'react-parallax';
import impronta from '../assets/loghi/impronta.jpeg';
import logo from '../assets/loghi/logoEon.png';
import { useParallax } from "react-scroll-parallax";


const HomeParallax = () => {
    /* return (
        <div className="home">
            <Parallax bgImage={impronta} strength={500}>
                <div className="parallax-content">
                    <h1>Benvenuti nel nostro sito</h1>
                    <p>Scorri verso il basso per scoprire di più</p>
                </div>
                <div className='parallax-content'>
                    <h1>Benvenuti nel nostro sito</h1>
                    <p>Scorri verso il basso per scoprire di più</p>
                </div>
                <div className='parallax-content'>
                    <h1>Benvenuti nel nostro sito</h1>
                    <p>Scorri verso il basso per scoprire di più</p>
                </div>
                <div className='parallax-content'>
                    <h1>Benvenuti nel nostro sito</h1>
                    <p>Scorri verso il basso per scoprire di più</p>
                </div>
                <div className='parallax-content'>
                    <h1>Benvenuti nel nostro sito</h1>
                    <p>Scorri verso il basso per scoprire di più</p>
                </div>

            </Parallax>
        </div>
    ); */

    const scaleCParallax = useParallax({
        scaleX: [0, 3, "easeInQuad"],
    });
    const parallaxRotateY = useParallax({
        rotateY: [0, 360],
    });
    /*  const parallaxRotateY2 = useParallax({
         rotateY: [0, 360],
     });
     const parallaxRotateY3 = useParallax({
         rotateY: [0, 360],
     }); 
     const parallaxRotateY4 = useParallax({
         rotateY: [0, 360],
     });*/
    const parallaxEasing = useParallax({
        easing: "easeOutQuad",
        translateX: [-340, 100],
    });
    const parallaxEasingLeft = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, -260],
        translateY: [1100],
    });
    /*  const parallaxEasing2 = useParallax({
         easing: "easeOutQuad",
         translateX: [-340, 100],
     });
     const parallaxEasingLeft2 = useParallax({
         easing: [1, -0.75, 0.5, 1.34],
         translateX: [0, -260],
         translateY: [1100],
     }); */
    const parallaxEasingCard1 = useParallax ({
        translateX: [-100,35],
    });
    const parallaxEasingCard2 = useParallax ({
        translateX: [-200,150],
    });
    return (
        <div>
            <section className="bg-container">
                <img
                    ref={parallaxRotateY.ref}
                    //src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    src={impronta}
                />
                <div className="absolute-text">
                    <h1 ref={parallaxEasing.ref}>BENVENUTO IN </h1>{/* <img className='logo-img' ref={parallaxRotateLogo.ref} src={logo} /> */}
                    <h2 ref={parallaxEasingLeft.ref}>For members only non profitable</h2>
                </div>
            </section>
            <br />
            <section className="card-container" ref={scaleCParallax.ref}>
                <div className="card">
                    <img src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
            </section>
            <section>

            </section>

            <br />
            <br />
            <section className="card-container">
                <div className='modal-test-fixed'>
                    Test
                </div>
            </section>
            <section className="card-container" ref={parallaxEasingCard1.ref}>
                <div className='modal-test-1'>
                    Test
                </div>
            </section>
            <section className="card-container" ref={parallaxEasingCard2.ref}>
                {/* <div className='modal-test-2'>
                    Test
                </div> */}
            </section>
            {/*  <div className="card" ref={parallaxRotateY2.ref}>
                    <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800" />
                </div>
                <div ref={parallaxRotateY3.ref} className="card">
                    <img src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div> 
            </section>*/}
            <br />
            {/*  <section className="bg-container">
                <img
                    ref={parallaxRotateY4.ref}
                    src={impronta}
                />
                <div className="absolute-text">
                    <h1 ref={parallaxEasing2.ref}>MEMBERSHIP WEBSITE</h1>
                    <h2 ref={parallaxEasingLeft2.ref}>For members only non profitable</h2>
                </div>
            </section> */}

        </div>
    );
};

export default HomeParallax;
