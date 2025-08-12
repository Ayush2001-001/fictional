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
        <div class="responsive">
          <div className="a">700 x 400</div>
          <div className="res">Project Name</div>
          <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive2">
          <div className="a">700 x 400</div>
          <div className="res2">Project Name</div>
          <div className="lorem2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive3">
          <div className="a">700 x 400</div>
          <div className="res3">Project Name</div>
          <div className="lorem3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive4">
          <div className="a">700 x 400</div>
          <div className="res4">Project Name</div>
          <div className="lorem4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive5">
          <div className="a">700 x 400</div>
          <div className="res5">Project Name</div>
          <div className="lorem6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive6">
          <div className="a">700 x 400</div>
          <div className="res6">Project Name</div>
          <div className="lorem6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive7">
          <div className="a">700 x 400</div>
          <div className="res7">Project Name</div>
          <div className="lorem7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive8">
          <div className="a">700 x 400</div>
          <div className="res8">Project Name</div>
          <div className="lorem8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
        <div class="responsive9">
          <div className="a">700 x 400</div>
          <div className="res9">Project Name</div>
          <div className="lorem9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        </div>
      </div><br></br>
        <div className="horizontal-line1"></div>
        <div className="your">Copyright© Your Website 2014</div>
    </>
  );
}
