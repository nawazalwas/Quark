import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div class="container">
        <div class="innerContainer">
            <div class="community">
                <p>Join our community</p>
                <p>30-day, hassle-free monkey back gurarantee</p>
                <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for
                    any developers who are serious about honing their skills</p>
    
    
            </div>
            <div class="more">
                <div class="card">
                    <p>Monthly Subscription</p>
                    <p><span>$29  </span>Per Month </p>
                    <p>Full access for less than $1 a day.</p>
                    <button type="submit">Sign Up</button>
                    
                </div>
                <div class="why-us">
                    <p>Why Us</p>
                    <ul class="why-us-items">
                        <li>Tutorials by industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access yo our GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decks</li>

                    </ul>
                    
                    
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default App;
