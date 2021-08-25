import React from 'react';

import { observer } from "mobx-react";
import Store from "../stores/store";

const store = new Store();

const TestPage = () => {
    return (
        <>
        </>
    )
};

const TestPageObserver = observer(TestPage);

export default TestPageObserver;
