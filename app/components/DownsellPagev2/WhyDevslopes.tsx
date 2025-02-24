"use client";

import { useEffect } from "react";
import Conversation from "../Conversation";
import Image from "next/image";
import Feedback from "../Feedback";
import CharacterCard from "../CharacterCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyDevslopes() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Set the logo to start hidden
    gsap.set("#devslopesLogo", { opacity: 0 });
    // When the section enters the viewport, fade in the logo
    gsap.to("#devslopesLogo", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#WhyDevslopes",
        start: "top center", // when the top of the section hits the center of the viewport
      },
    });
  }, []);

  return (
    <section id="WhyDevslopes" className="s-basic-padding">
      <div className="flex-center-center flex-column basic-margin-top-bottom">
        <Image
          src="./DownsellPage/DevslopesPink.svg"
          id="devslopesLogo"
          alt="Devslopes logo"
          height={100}
          width={100}
        ></Image>
        <h1 className="centered-text font-l">
          <strong>
            <i className="centered-text">
              I built Devslopes to create a new way of learning.
            </i>
          </strong>
        </h1>
        <p className="font-m centered-text a-meetdevslopes">
          You can&apos;t get the job without experience, but you can&apos;t get
          experience without the job.
          <br></br>{" "}
          <span className="bold pink-text">We solved that problem.</span> We
          don&apos;t just teach skills.{" "}
          <span className="bold">We get you paid while you learn. </span> Our
          students don&apos;t wait for permission.{" "}
          <span className="pink-text bold">
            They work on real projects, build real experience, and land real jobs.
          </span>
        </p>
        <p className="centered-text">
          <i>
            See real messages from our students, sent while amidst the Devslopes
            course.
          </i>
        </p>
        <p className="production-note">Note: here are some possible ways to display the feedback - which do you prefer?</p>
        <div className="feedback-column-wrapper  a-meetdevslopes flex-start-start flex-column">
          <Feedback
            message="1 just got two more jobs: one landing page for $150 to deliver on Monday, and another landing page for $500 to deliver in two weeks. Thank you for your support!"
            color="blue"
            name="Bill Rodrigo"
            image="./DownsellPage/outline.svg"
          ></Feedback>
          <Conversation
            message1={[
              "Yo!",
              "Guess who landed that contract?! 9 county Supervisor of Election sites. all hosted and maintained. They already have the website built so I only have to migrate it.",
            ]}
            sender1="Drake"
            sender1Image="./DownsellPage/outline.svg"
            message2={["Whats up!"]}
            sender2="anonymousuzzer"
            sender2Image="./DownsellPage/nathan.svg"
          />
          <CharacterCard
            message="1 just got two more jobs: one landing page for $150 to deliver on Monday, and another landing page for $500 to deliver in two weeks. Thank you for your support!"
            color="blue"
            name="Bill Rodrigo"
            image="./DownsellPage/outline.svg"
          ></CharacterCard>
        </div>
      </div>
      <div className="text-container">
        <h1 className="centered-text font-l">
          <span className="pink-text bold "> Earn While You Learn</span> works
          because it attacks the doubt within you, and proves that anything is
          possible!
        </h1>
        <p className="centered-text">
          You can&apos;t do it alone.
          <strong>No one can.</strong> That&apos;s why I built a team of industry
          pros—mentors who actually know what they&apos;re doing. These aren&apos;t
          green as grass bootcamp graduates;{" "}
          <span className="pink-text bold">
            {" "}
            these are real software engineers who guide you to real paid projects,
            teach you the best ways to sell yourself, and provide accountability
            when you&apos;re stuck.
          </span>
        </p>
        <div className="flex-center-center basic-margin-top">
          <Image
            src="./DownsellPage/meteor.svg"
            className="space-drift"
            height={200}
            width={200}
            alt="spaceship"
          ></Image>
          <div className="flex-start-start no-flex-grow basic-margin-top-bottom">
            <div style={{ width: "100px", height: "100px", position: "absolute" }}>
              <div
                className="flex-center-center"
                style={{ height: "100px", marginRight: "-100px" }}
              >
                <Image
                  className="sun-rotate-center sunburst-rotating-div"
                  style={{ opacity: "0.5", marginTop: "0px" }}
                  src="./DownsellPage/sun.svg"
                  height={100}
                  width={100}
                  alt="sun"
                />
                <Image
                  src="./DownsellPage/sprout_1.svg"
                  style={{ marginTop: "-20px" }}
                  height={80}
                  width={80}
                  alt="sprout"
                />
              </div>
            </div>
            <Image
              src="./DownsellPage/astronaut-4.svg"
              className="space-drift"
              width={400}
              height={350}
              alt="spaceship"
            ></Image>
          </div>
        </div>
        <p className="centered-text">
          At Devslopes, we believe in our freelance curriculum so much that{" "}
          <strong>
            {" "}
            we guarantee a paid project for every student who joins the academy.
          </strong>{" "}
          We put this project at the end of our{" "}
          <span className="pink-text">Business Operations</span> curriculum.
        </p>
      </div>
    </section>
  );
}
