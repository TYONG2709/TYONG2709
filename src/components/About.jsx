import React from 'react';

/**
 * A short introduction about myself
 * @returns A section about myself
 */
function About() {
    return (
        <section id="about" style={{ textAlign: 'center', padding: '50px 20px'}}>
            <h1>Teng Yi Ong</h1>
            <h2>2nd Computer Science Student</h2>
            <p>
                Currently in my 2nd year studying Computer Science at University of Nottingham, 
                seeking for an internship in software development that provides opportunity to learn 
                and further discover more software methodologies & tools to create a maintainable software 
                and make a positive impact to the society. <br/> 
                I’m interested in agile software development with experience of using Java. 
                Besides that, I’m doing some research to discover more about AI and Data Analytics in my free time.
            </p>
        </section>
    );
}

export default About;