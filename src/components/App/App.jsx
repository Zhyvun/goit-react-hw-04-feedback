// import React, { Component } from 'react';
import { useState } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

//* HOOKS
export const App = () => {
  const [good, setGood] = useState(0);
  const [netural, setNetural] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'netural', 'bad'];

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'netural':
        setNetural(netural + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default: {
        console.log('No variant');
      }
    }
  };

  const countTotalFeedback = () => {
    const values = [good, netural, bad];
    const totalFeedback = values.reduce((total, value) => (total += value), 0);
    return totalFeedback;
  };

  const total = countTotalFeedback();
  const countPositivePercentage = total => {
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={netural}
            bad={bad}
            total={total}
            positivePercentage={countPositivePercentage(total)}
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
