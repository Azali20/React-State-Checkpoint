import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Clinton Faraday',
      bio: 'Clinton Faraday is a talented and passionate web developer who is making waves in the digital world. With a deep-rooted love for all things tech, Clinton has embarked on an exciting journey to revolutionize the online landscape. As a natural problem solver, Clinton thrives on challenges and approaches each project with meticulous attention to detail. He believes in the power of collaboration and takes the time to understand his clients unique needs, translating their visions into functional and captivating digital experiences. With a keen eye for aesthetics and a deep understanding of user experience, Clinton crafts seamless interfaces that engage and delight users, leaving a lasting impact Beyond his technical prowess, Clinton is known for his strong work ethic and professionalism. He prides himself on delivering projects on time and exceeding expectations. His excellent communication skills and ability to work seamlessly within a team make him a valuable asset to any project.Clinton Faraday journey as a web developer is marked by his unwavering dedication, relentless curiosity, and passion for creating remarkable online experiences.',
      imgSrc: './image/Clinton.jpg',
      profession: 'Web Developer'
    },
    show: false,
    intervalId: null,
    timeElapsed: 0
  };

  componentDidMount() {
    const intervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeElapsed = () => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div style= {{background: 'linear-gradient(to right, gray, skyblue)'}}>
        <button style= {{color:'red'}} onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img style={{ height: 250, width: 250, padding: 20 }} src={imgSrc} alt="Avatar" />
            <p style= {{color:''}}> Bio: {bio}</p>
            <p style= {{color:'purple'}}>Profession: {profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
