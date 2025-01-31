import React, {useRef, useLayoutEffect} from "react";
import Layout from "@theme/Layout";

// styles
import styles from "../css/index.module.css";
import 'primeicons/primeicons.css';

// hooks
import { useHistory } from "@docusaurus/router";

// animation
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // for navigation
  const history = useHistory();
  
  // base for animations
  const ref = useRef(null)

  // * animations

  // landing page animations
  useLayoutEffect(() => {
    const element = ref.current;

    // ! NOTE
    // I know that using query selectors seems odd with react, but it works
    // CSS Animations are not meant to make the app re-render
    // Which is why we aren't using 50000 refs
    // It would be much slower, much more difficult and not work like we mean it to
    // So don't remove the query selectors

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 500px)", () => {
        gsap.fromTo(element.querySelectorAll(".home-page-1-anim"), {
          y: -20,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3
        });
      })
    }, ref);

    return () => ctx.revert()
  }, [])

  // page 2
  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 500px)", () => {
        gsap.fromTo(element.querySelectorAll(".home-page-2-anim"), {
          y: 20,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            start: 'top top',
            end: 'bottom bottom',
            trigger: element.querySelector('.home-page-2'),
          }
        })
      })
      
    }, ref)

    return () => ctx.revert()
  }, [])


  // page 3
  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 500px)", () => {
        gsap.fromTo(element.querySelectorAll(".home-page-3-anim"), {
          y: 20,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            start: 'top 20%',
            end: 'bottom bottom',
            trigger: element.querySelector('.home-page-3'),
          }
        })
      })
    }, ref)

    return () => ctx.revert();
  }, [])

  // page 4
  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 500px)", () => {
      gsap.fromTo(element.querySelectorAll(".home-page-4-anim"), {
        x: 20,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          start: 'top 30%',
          end: 'bottom bottom',
          trigger: element.querySelector('.home-page-4'),
        }
      })
    })
    }, ref)

    return () => ctx.revert()
  }, [])

  // page 5
  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 500px)", () => {
      gsap.fromTo(element.querySelectorAll(".home-page-5-anim"), {
        x: -20,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          start: 'top 30%',
          end: 'bottom bottom',
          trigger: element.querySelector('.home-page-5'),
        }
      })
      })
    }, ref)

    return () => ctx.revert()
  }, []);

  // * CLASSNAMES
  // home-page-[number]-anim are the animated components
  // home-page-[number] refers to the home pages for the animations

  return (
    <Layout
      title={`Home`}
      description="Home of the Nord Anglia Education Computing Association"
    >
      <main className={styles.homePage} ref={ref}>
        {/* page 1 */}
        <div className={styles.homePage1}>
          <div className={styles.homePage1Overlay}></div>
          <h1 className={styles.homePage1Header + " home-page-1-anim"}>Nord Anglia Education Computing Association</h1>
          <p className={styles.homePage1Desc + " home-page-1-anim"}>
            Uniting and leading the Flotilla Through Shifting Seas of STEAM and IT​
          </p>
          <div className={styles.homePage1BottomBar}>
            <button className={styles.homePage1BottomBarButton + " home-page-1-anim"}>
              Placeholder
            </button>
            <button className={styles.homePage1BottomBarButton + " home-page-1-anim"} onClick={() => history.push('/hackathon')}>
              Our Hackathon
            </button>
          </div>
        </div>
        {/* page 2 */}
        <div className={styles.homePage2 + " home-page-2"}>
          <h1 className={styles.homePage2Header + " home-page-1-anim"}>What is the NAECA?</h1>
          {/* 2 column layout, with each column having ~45% width */}
          <div className={styles.homePage2Columns}>
            <div className={styles.homePage2Column}>
              <p className={styles.content + " home-page-2-anim"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum turpis ac nulla feugiat, et accumsan turpis molestie. Proin sagittis, felis at maximus interdum, lectus diam iaculis nibh, eu scelerisque arcu nunc eu enim. Quisque condimentum pretium mauris, non congue diam convallis id. Proin euismod nisl velit, ut bibendum est posuere eu. Donec laoreet lorem eget lectus cursus, quis hendrerit orci dapibus. Pellentesque pretium nibh eu ipsum venenatis, sed placerat diam dictum. Duis gravida, nunc nec rutrum pharetra, nulla risus volutpat tortor, eu tempus lacus magna at tortor. Sed lobortis, neque eget sagittis tempor, nisl velit porttitor magna, sit amet porta metus ligula mattis velit. Nulla facilisi. Integer in luctus orci.

                Phasellus tempus neque ac justo gravida ultricies. Fusce cursus dapibus dui nec sodales. Nunc semper dui tortor. Aliquam varius justo quis neque suscipit vestibulum. Integer eleifend vulputate metus eget consectetur. In sagittis hendrerit pretium. Aenean rutrum, ligula vitae gravida viverra, quam eros porttitor orci, a vestibulum ligula magna non quam. Sed tortor lacus, porttitor vel erat sed, tempor congue mi. Pellentesque mauris lectus, cursus eget iaculis sollicitudin, gravida in nisi. Nulla facilisi.
              </p>
            </div>
            <div className={styles.homePage2Column}>
              <p className={styles.content + " home-page-2-anim"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum turpis ac nulla feugiat, et accumsan turpis molestie. Proin sagittis, felis at maximus interdum, lectus diam iaculis nibh, eu scelerisque arcu nunc eu enim. Quisque condimentum pretium mauris, non congue diam convallis id. Proin euismod nisl velit, ut bibendum est posuere eu. Donec laoreet lorem eget lectus cursus, quis hendrerit orci dapibus. Pellentesque pretium nibh eu ipsum venenatis, sed placerat diam dictum. Duis gravida, nunc nec rutrum pharetra, nulla risus volutpat tortor, eu tempus lacus magna at tortor. Sed lobortis, neque eget sagittis tempor, nisl velit porttitor magna, sit amet porta metus ligula mattis velit. Nulla facilisi. Integer in luctus orci.

                Phasellus tempus neque ac justo gravida ultricies. Fusce cursus dapibus dui nec sodales. Nunc semper dui tortor. Aliquam varius justo quis neque suscipit vestibulum. Integer eleifend vulputate metus eget consectetur. In sagittis hendrerit pretium. Aenean rutrum, ligula vitae gravida viverra, quam eros porttitor orci, a vestibulum ligula magna non quam. Sed tortor lacus, porttitor vel erat sed, tempor congue mi. Pellentesque mauris lectus, cursus eget iaculis sollicitudin, gravida in nisi. Nulla facilisi.
              </p>
            </div>
          </div>
        </div>
        {/* page 3 */}
        <div className={styles.homePage3 + " home-page-3"}>
          <h1 className={styles.homePage3Header + " home-page-3-anim"}>Why the NAECA?</h1>
          {/* these render a bunch of boxes that will contain the reasons */}
          <div className={styles.reasons}>
            <div className={styles.reason + " home-page-3-anim"}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason + " home-page-3-anim"}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason + " home-page-3-anim"}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason + " home-page-3-anim"}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason + " home-page-3-anim"}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
          </div>
        </div>
        {/* home page 4 */}
        <div className={styles.homePage4 + " home-page-4"}>
          <h1 className={styles.homePage4Header + " home-page-4-anim"}>Our aims</h1>
          <p className={styles.homePage4Content + " home-page-4-anim"}>
            <ul>
              <li>To bring both NAE, FORBISIA and Singapore based international schools together</li>
              <li>Allow people to network and interconnect together​</li>
              <li>Teach and introduce complex programing skills in one place​</li>
              <li>Improve people's presentation and problem-solving skills</li>
              <li>Give students an open, accesible platform to learn and compete</li>
              <li>Use a competition to allow us to see the engagement between schools</li>
              <li>Launching NAECA via a competition</li>
            </ul>
          </p>
        </div>
        {/* home page 5 */}
        <div className={styles.homePage5 + " home-page-5"}>
          <h1 className={styles.homePage5Header + " home-page-5-anim"}>What's after</h1>
          {/* the list is rendered kind of like 'bubbles' */}
          <p className={styles.homePage5Content + " home-page-5-anim"}>
            <ul>
              <li>Forming Nord Anglia Education Computing Association​</li>
              <li>Structure:</li>
              <ul>
                <li>Yearly elections</li>
                <li>Regional heads</li>
                <li>Event teams</li>
              </ul>
              <li>Yearly hackathons​</li>
              <li>Gamenights</li>
              <li>News sharing​</li>
              <li>Programing challenges​</li>
              <li>Teaching of skills</li>
              <li>Introducing courses</li>
              <li>Discussions</li>
              <li>Debates</li>
            </ul>
          </p>
        </div>
      </main>
    </Layout>
    );
}
