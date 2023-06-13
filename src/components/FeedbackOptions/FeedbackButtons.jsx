import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './FeedbackButtons.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0) + option.slice(1)}
        </Button>
      ))}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
