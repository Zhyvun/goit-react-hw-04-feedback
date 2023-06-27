// import React, { Component } from 'react';
// import React from 'react';
import { useState } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

//* HOOKS
export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (total, currentValue) => total + currentValue
  );

  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <Container>
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={handleFeedback}
        options={Object.keys(feedback)}
      />
    </Section>
    <Section title="Statistics">
      {totalFeedback ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification alert="There is no feedback" />
      )}
    </Section>
  </Container>
  );
};

/* CLASS !
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification alert="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
*/
