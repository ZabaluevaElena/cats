import React from "react";
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`
const Label = styled.label`
${Input}+& {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
${Input}+&::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
${Input}:checked+&::before {
  background-color: #ced3d3;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

${Input}:not(:disabled):not(:checked)+&:hover::before {
  border-color: rgba(136, 133, 133, 0.993);
}
${Input}:not(:disabled):active+&::before {
  background-color: #a2a7ad;
  border-color: #a2a7ad;
}
${Input}:focus+&::before {
  box-shadow: 0 0 0 0.2rem rgba(66, 73, 80, 0.25);
}
${Input}:focus:not(:checked)+&::before {
  border-color: #858585;
}
${Input}:disabled+&::before {
  background-color: #e9ecef;
}
`

const Header = ({ name, onChange }) => {
  return (
    <>
      <div className="radio">      
          <Input type="radio" id="enadled"
           checked={name === "enadled"}
           onChange={() => onChange('enadled')}
            />
          <Label htmlFor="enadled">
          Enadled
        </Label>
      </div>
      <div className="radio">
      
          <Input
            type="radio"
            id="autoRefrash"
            checked={name === "autoRefrash"}
            onChange={() => onChange('autoRefrash')}
          />
          <Label htmlFor="autoRefrash">
          Auto-refrash every 5 second
        </Label>
      </div>
    </>
  );
};

export default Header;
