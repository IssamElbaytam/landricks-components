import React from 'react';
import styles from './styles';

function handleClick(onClick, args) {
  return (event) => {
    event.preventDefault();
    onClick(args);
  }
}

function renderVideo(s, props) {
  return (<video src={ props.videoUrl } autoPlay={ true } loop={ true } style={ s.video } />);
}

function renderContent(s, props) {
  if (props.buttons) {
    return props.buttons.map((button, index) => {
      return (<a key={ index } href="#" onClick={ handleClick(button.onClick) } style={ s.button }>{ button.label }</a>);
    });
  }
  return props.content;
}

export default (props) => {

  let s = styles(props);

  return (

    <section style={ s.box }>

      <div style={ s.textColumn }>

        <h1 style={ s.h1 }>{ props.title }</h1>

        <h2 style={ s.h2 }>{ props.subtitle }</h2>

        { renderContent(s, props) }

      </div>

      <div style={ s.videoColumn }>

        { renderVideo(s, props) }

      </div>

    </section>

  );

}