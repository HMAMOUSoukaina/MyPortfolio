// src/projectsData.js

import chu from "../images/chu.jpg";
import doctori from "../images/doctori.png";
import stay from "../images/stayAwhile.png";
import book from "../images/bookShop1.jpeg";
import javaFX from "../images/javafx1.png";

import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";

import java from "../images/java.png";
import php from "../images/php.png";
import symfony from "../images/symfony.png";
import mySQL from "../images/mySQL.png";
import docker from "../images/docker.png";

import github from "../images/github.png";
import scrum from "../images/scrum.png";
import android from "../images/android.png";
import xml from "../images/xml.png";

const projects = [
  {
    name: "Medical Platform",
    img: chu,
    stack: [html, css, react, symfony, mySQL, github, docker, scrum],
    codeRepo: "",
    demo: "",
    description:
      "This project updates the management of neonatal records at CHU d'Oujda with a digital solution. It improves care quality by providing fast, accurate access to medical information and enhances data security, streamlining processes for better patient care.",
  },
  {
    name: "Doctori",
    img: doctori,
    stack: [html, css, js, php, mySQL, github],
    codeRepo: "https://github.com/HMAMOUSoukaina/medical_platform",
    demo: "https://drive.google.com/file/d/17_uWgFEduYAZ1kGH2zR8Crefm7tOO--y/view",
    description:
      "Web application for managing medical appointments and records. Patients can schedule and confirm appointments easily, while doctors can access and review patient information securely.",
  },
  {
    name: "stayAwhile",
    img: stay,
    stack: [html, css, react, bootstrap, github],
    codeRepo: "https://github.com/HMAMOUSoukaina/StayAwhile",
    demo: "https://stay-awhile-one.vercel.app/",
    description:
      "Web application promoting Moroccan tourism by showcasing unique city resources. It enhances the experience for both locals and visitors, simplifying exploration and helping users discover Morocco's cultural and natural treasures.",
  },
  {
    name: "BookShop",
    img: book,
    stack: [java, android, xml, github],
    codeRepo: "https://github.com/HMAMOUSoukaina/BookShop",
    demo: "https://drive.google.com/file/d/1MpRdLe9zv46SL3qr3kt-0mxKwNir20BO/view?usp=sharing",
    description:
      "Mobile app for buying books. This app was developed to make it easy to purchase books online. It has secure login, lets users browse books by category, and includes an online payment process using Stripe.",
  },
  {
    name: "Students Managing",
    img: javaFX,
    stack: [java, mySQL, github],
    codeRepo: "https://github.com/HMAMOUSoukaina/gestion_etudiant",
    demo: "https://drive.google.com/file/d/1YiKLbwdnqCaQSDSQbbLujM2C72gw8-wE/view?usp=sharing",
    description:
      "Mini desktop application for managing student registrations. It enables users to create, update, delete, and view student profiles, with the added capability to generate PDF summaries for each profile, ensuring a smooth registration process.",
  },
];

export default projects;
