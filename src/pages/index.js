import React from 'react'
// import Link from 'gatsby-link'

import iconNewGroup from '../components/img/icon-new-group.png';
import whiteProjectsLibrary from '../components/img/icon-whiteProjectsLibrary.png';
import whiteObjectsLibrary from '../components/img/icon-whiteObjectsLibrary.png';
import cloud from '../components/img/icon-cloud.png';
import blackDimension from '../components/img/icon-blackDimension.png';
import robot from '../components/img/icon-robot.png';
import mappa from '../components/img/mappa.png';

const IndexPage = ({data}) => (
    <div>
        <nav className="w-100 flex items-center justify-end bg-dark-gray h3 absolute t0 z-1">
            <div className="flex white w-thirds h-20 mr7">
                <h2 className="pa2 ma3 f6">BLOG</h2>
                <a href="#bim"><h2 className="pa2 ma3 f6">SOFTWARE</h2></a>
                <a href="#about-us"><h2 className="pa2 ma3 f6">HISTORY</h2></a>
                <a href="#colophon"><h2 className="pa2 ma3 f6">CONTACTS</h2></a>
                <a href="#careers"><h2 className="pa2 ma3 f6 bg-red">WE'RE HIRING</h2></a>
            </div>
        </nav>
        <section id="cover" className="bg-blue viewport-frame relative flex items-center justify-center">
            <h1 id="claim" className="f-subheadline lh-solid ma0 white outlined tc">Developing the BIM <br /> app that crafts <br /> real buildings!</h1>
            <div id="stats-bar" className="w-100 h4 bg-dark-gray w-100 absolute bottom-0 flex justify-center items-center white">
                <div id="online-users" className="pa2 ma3 flex items-center">
                    <img src={iconNewGroup} alt="" height="64" width="64"/>
                    <h2 className="f6"><span>10k</span> users</h2>
                </div>
                <div id="public-projects" className="pa2 ma3 flex items-center">
                    <img src={whiteProjectsLibrary} alt="" height="64" width="64"/>
                    <h2 className="f6"><span>10k</span> public projects</h2>
                </div>
                <div id="objects" className="pa2 ma3 flex items-center">
                    <img src={whiteObjectsLibrary} alt="" height="64" width="64"/>
                    <h2 className="f6"><span>10k</span> objects</h2>
                </div>
                <div id="online-users" className="pa2 ma3 flex items-center">
                    <img src={cloud} alt="" height="64" width="64"/>
                    <h2 className="f6"><span>10k</span> online users</h2>
                </div>
            </div>
        </section>
        <section id="bim" className="bg-pink viewport-frame flex">
            <div id="bim-slim-window" className="bg-white w-30 h-100 flex items-center justify-center relative">
                <div id="bim-container" className="flex items-center justify-center absolute bottom-0">
                    <img src={blackDimension} alt="" height="64" width="64"/>
                    <h2 className="f1 lh-title w-50">BIM</h2>
                </div>
            </div>
            <div id="bim-fat-window" className="bg-light-gray w-70 h-100 flex justify-center items-center tc">
                <h2 id="bim-claim" className="f1 lh-title w-50">Get your design effortlessly manufactured!</h2>
            </div>
        </section>
        <section id="mom" className="bg-pink viewport-frame flex">
            <div id="mom-fat-window" className="bg-light-gray w-70 h-100 flex justify-center items-center tc">
                <h2 id="mom-claim" className="f1 lh-title w-50">Get your design effortlessly manufactured!</h2>
            </div>
            <div id="mom-slim-window" className="bg-white w-30 h-100 flex items-center justify-center relative">
                <div id="mom-container" className="flex items-center justify-center absolute top-0">
                    <img src={robot} alt="" height="64" width="64"/>
                    <h2 className="f1 lh-title w-50 top-0">MOM</h2>
                </div>
            </div>
        </section>
        <section id="about-us" className="bg-dark-gray viewport-frame flex" >
            <div className="w-50 bg-light-blue pa6 flex items-center justify-center">
                <div id="text" className="mw6">
                    <p>Zuru is a multinational company born in New Zeland in 2004. It is often considered one of the most innovative in the toy industry. Using cutting-edge technologies, Zuru is able to design, manufacture and market world-class products. Furthermore, it is developing a supply chain augmentation through automation and a lights-out process for pre-fab housing, seeking to revolutionize the building industry as it has been known until now.</p>
                    <h5>TOY INNOVATION</h5>
                    <p>ZURU’s toy products underpin the success of the company – with an investment in the latest and most innovative technologies is able to offer great products at an affordable price point, below industry averages .</p>
                    <h5>AUTOMATION</h5>
                    <p>In order to compete at the highest level ZURU invests heavily in the development of automation manufacture. This investment means ZURU products are made with extreme accuracy, efficiency and allows price points otherwise unattainable. In 5 years ZURU will be the leading automation manufacturer in the toy industry.</p>
                    <h5>CONSTRUCTION</h5>
                    <p>The latest investment for ZURU sees it taking on the housing industry. An industry worth over 100 trillion it is an exciting space to develop. ZURU plans to build and operate what will be the world’s 3rd largest manufacturing facility spanning over 1,200,000 million meters², investing 120 million USD during phase one. The lights out facility will revolutionize an industry!</p>
                </div>
            </div>
            <div className="w-50 bg-dark-gray flex flex-wrap items-center justify-center relative">
                <h2 className="f1 lh-titl tc white w-100 absolute top-2">ZURU</h2>
                <img src={mappa} alt="" className="" />
            </div>
        </section>
        <section id="careers" className="viewport-frame flex flex-wrap content-start" >
            <div id="careers-header" className="w-100 h-25">
                <div id="tags-container" className="w-50 flex justify-between pt4 pl3">
                    <div className="bg-yellow w-25 h2 flex items-center justify-center"><a><h3>👉 ITALY</h3></a></div>
                    <div className="bg-yellow w-25 h2 flex items-center justify-center"><a><h3>👉 INDIA</h3></a></div>
                    <div className="bg-yellow w-25 h2 flex items-center justify-center"><a><h3>👉 CHINA</h3></a></div>
                </div>
                <div id="were-seeking" className="w-100 h-75 flex items-center justify-center">
                    <h2 className="f1 pa0 pt3 lh-title w-50 tc">We're seeking talents to expand our formidable team!</h2>
                </div>
            </div>
            <div id="open-positions" className="w-100 h-50">
                <h2>Italy</h2>
                <div id="italy-careers" className="w-100 flex flex-wrap justify-between items-center pl6 pr6 pt4">
                    {
                        data.allMarkdownRemark.group.filter(job => job.fieldValue === "Italy")[0].edges.map(job => (
                            <div key={job.node.id} className="w-30 h3 bg-dark-gray white tc ttu tracked mb2"><h3><a href={job.node.frontmatter.path}>{job.node.frontmatter.title}</a></h3></div>
                        ))
                    }
                </div>
                <br/>
                <h2>India</h2>
                <div id="india-careers" className="w-100 flex flex-wrap justify-between pl6 pr6 pt4">
                    {
                        data.allMarkdownRemark.group.filter(job => job.fieldValue === "India")[0].edges.map(job => (
                            <div key={job.node.id} className="w-30 h3 bg-dark-gray white tc ttu tracked mb2"><h3><a href={job.node.frontmatter.path}>{job.node.frontmatter.title}</a></h3></div>
                        ))
                    }
                </div>
                <br/>
                <div id="china-careers" className="w-100 flex flex-wrap justify-between pl6 pr6">
                    <div className="w-100 bg-dark-gray white tc ttu tracked mt4"><h3>recruiting website</h3></div>
                </div>
            </div>
            <div id="news" className="w-100 h-25">
                <div className="w-100 h-75 flex items-center justify-center">
                    <h2 className="f1 pa0 pt3 lh-title w-80 tc">Between 18-20th, May 2018, we will be at <u>Svilupparty 2018</u>, Bologna, Italy. We're eager to meet you there!</h2>
                </div>
            </div>
        </section>
    </div>

)

export const pageQuery = graphql`
    query IndexQuery {
      allMarkdownRemark {
        group(field: frontmatter___country) {
          fieldValue
          edges {
            node {
              id
              frontmatter {
                title
                path
                country
              }
            }
          }
        }
      }
    }

`

export default IndexPage
