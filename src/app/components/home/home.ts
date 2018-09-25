import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './home.html?style=./home.scss';

@WithRender
@Component
export default class Home extends Vue {

}
