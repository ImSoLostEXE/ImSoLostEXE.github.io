import { SubmitButton } from "./submitbutton";
import { Spinner } from "./spinner";
import { useState } from "react";


export const Search = () => {

    const [spinnerVisible, screamLoading] = useState(false);
    const [inputVisible, notLoading] = useState(true);
    const screamIntoTheVoid = () => {screamLoading(true), notLoading(false), setTimeout(()=>{screamLoading(false),notLoading(true)}, 5000)};

    return (
            <div className="input-group justify-content-md-center">
            <span className="input-group-text">|</span>
            {spinnerVisible && (<Spinner/>)}
            {inputVisible && (<input type="text" className="form-control" />)}
            <SubmitButton onClick={() => screamIntoTheVoid()}>|0\|?</SubmitButton>
            <span className="input-group-text">|</span>
            </div>
  )
}
