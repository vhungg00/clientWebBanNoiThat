import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/PageHero';


function About() {
    return (
        <Wrapper>
            <div className="about" >
                <PageHero tytle={'about'} />
                <div className="grid wide">
                    <div className="container-about">
                        <div className="row">
                            <div className="container-col col l-6 m-12 sm-12">
                                <img src="/assets/images/about/about.jpeg" alt="" className="about-img" />
                            </div>
                            <div className="container-col col l-6 m-12 sm-12">
                                <h1 className="heading">Our Story</h1>
                                <span></span>
                                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
                                    delectus error accusamus vel eligendi, omnis beatae. Quisquam,
                                    dicta. Eos quod quisquam esse recusandae vitae neque dolore,
                                    obcaecati incidunt sequi blanditiis est exercitationem molestiae
                                    delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`

margin-top: 58px;
    .container-col{
        margin-top: 3rem;
        h1 {
            color: var(--primary-color);
        }
        span{
            height: 1px;
            background-color: var(--clr-grey-8);
            width: 30%;
            display: block;
        }
        p{
            text-align: justify;
            line-height: 2;
            color: var(--clr-grey-5);
            size: 1.6rem;
        }
        
    }
    .about-img {
        width: 100%;
        object-fit: cover;
        border-radius: var(--radius);
    }

`


export default About;