/**
 * The page script which is a refast component extends from react
 * component.
 */
import recore from 'recore';
import { Component } from 'refast';
import Button from 'uxcore/lib/Button';
import UserInfo from 'components/user-info';
import logic from './logic';
import './View.less';

const i18n = recore.get('i18n');

export default class View extends Component {
  static displayName = 'PageIndex';

  constructor(props) {
    super(props, logic);

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.dispatch('queryUserInfo');
  }

  onClick() {
    this.dispatch('onClick');
  }

  render() {
    const { userData, thumbsUp } = this.state;
    return (<div className="page-index">
      <div className="content">
        <UserInfo userData={userData} locale={'zh-cn'} />
        <Button type="secondary" size="small" onClick={this.onClick}>
          {`${i18n('thumbsUp')}(${thumbsUp})`}
        </Button>
      </div>
    </div>);
  }
}
