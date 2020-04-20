import React from 'react';

function Exapndable() {
  return (
    <div>
      <div className="expandable-header">Header</div>
      <div className="expandable-body">{this.props.children}</div>
    </div>
  );
}

export default Exapndable;
