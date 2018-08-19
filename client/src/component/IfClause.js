import React from 'react';

/**
 * This is a declarative way of using an if-then condition
 * within JSX syntax.
 * 
 * Usage example is:
 * 
 * <IfClause condition={ } >
 *      // write some code here
 * </IfClause>
 */
export default class IfClause extends React.Component {

    render() {
        if(this.props.condition && this.props.condition === true) {
            return this.props.children;
        }

        return null;
    }

}
