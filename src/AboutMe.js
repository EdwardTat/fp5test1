import React, { useState } from 'react'
import { useEffect } from 'react';
import './AboutMe.css'

function AboutMe() {

    return (
        <div>
            <div class="columns">
                <div class="column">
                    <img class="image"
                        src={require('./apppictures/pw3.png')}
                        draggable="false" />
                </div>
                <div class="column">
                    <img class="image"
                        src={require('./apppictures/pw4.png')}
                        draggable="false" />
                </div>
            </div>
        </div>
    );

};

export default AboutMe;