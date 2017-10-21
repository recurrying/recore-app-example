import './View.less';

const { Component, PropTypes } = window.React;

// We prefer you put component labels inside
const labels = {
  'en': {
    name: 'Name',
    gender: 'Gender',
    age: 'Age',
    bio: 'Bio',
  },
  'zh-cn': {
    name: '姓名',
    gender: '性别',
    age: '年龄',
    bio: '简介',
  },
};

export default class View extends Component {
  static displayName = 'UserInfo';

  static propTypes = {
    userData: PropTypes.object,
    locale: PropTypes.string,
  };

  static defaultProps = {
    userData: {},
    locale: 'zh-cn',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { userData, locale } = this.props;
    const localLabels = labels[locale];
    const dataJsx = Object.keys(userData).map(key => {
      return (<li key={key} className={key}>
        <label>{localLabels[key]}</label>
        <span>{userData[key]}</span>
      </li>);
    });
    return (<div className="c-user-info">
      <ul className="fn-clear">{dataJsx}</ul>
    </div>);
  }
}
