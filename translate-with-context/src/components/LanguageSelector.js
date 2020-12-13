import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          style={{ cursor: 'pointer' }}
          className='flag us'
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          style={{ cursor: 'pointer' }}
          className='flag nl'
          onClick={() => this.context.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
