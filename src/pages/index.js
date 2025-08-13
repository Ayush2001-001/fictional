import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="head">
        <div className="layout1">Layout 1</div>
        <div className="about">About</div>
        <div className="service">Service</div>
        <div className="contact">Contact</div>
      </div><br></br>
      <div className="head1">
        <div className="page">Page Heading</div>
         <div className="para">Secondry Text</div>
      </div><br></br>
        <div className="horizontal-line"></div>
      <div className="container">
        <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
         <div className="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
      </div><br></br>
        <div className="horizontal-line1"></div>
        <div className="your">Copyright© Your Website 2014</div>
    </>
  );
}
