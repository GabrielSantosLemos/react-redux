import React from 'react';
import { connect } from 'react-redux';

const styleVideo = {
    flex: "1",
    alignSelf: "flex-start"
}

const Video = ({ activeModule, activeLesson }) => (
    <div style={styleVideo}>
        <strong>Módulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
    </div>
)

export default connect(state => ({ 
    activeModule: state.course.activeModule, 
    activeLesson: state.course.activeLesson
}))(Video);