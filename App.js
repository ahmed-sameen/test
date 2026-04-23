import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppLayout from './src/Components/Routing/Applayout/AppLayout'
import Body from './src/Components/Routing/Body/Body'
import About from './src/Components/Routing/About/ABout'
import ProtectedRoute from './src/Utils/ProtectedRoute'
// import UseCallback from './src/Components/Routing/Callback/UseCallback'
import ErrorBoundaryClass from './src/Utils/ErrorBoundaryClass'
import { A } from './src/Components/ClassComponents/A'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryFunction from './src/Utils/ErrorBoundaryFunction'
import TodoCustomHook from './src/Components/CustomHooks/TodoCustomHook'
import TodosCustomHook from './src/Components/CustomHooks/TodosCustomHook'
import Debouncing from './src/Components/Debouncing/Debouncing'
import appStore from './src/Utils/appStore'
import ForwardRef from './src/Components/ForwardRef/ForwardRef'
import HOC from './src/Components/HOC/HOC'
import Context from './src/Components/Context/Context'
import UseImperativeHandle from './src/Components/ImperativeHandle/UseImperativeHandle'
import LiveChat from './src/Components/LiveChat/LiveChat'
import UseMemo from './src/Components/Memo/UseMemo'
import Radio from './src/Components/Radio&Select/Radio'
import Select1 from './src/Components/Radio&Select/Select1'
import ReactHookForm from './src/Components/ReactHookForm/ReactHookForm'
import RecursionComment from './src/Components/RecursionComment/RecursionComment'
import Redux from './src/Components/Redux/Redux'
import StyledComponents from './src/Components/StyledComponents/StyledComponents'
import UseReducer from './src/Components/Reducer/UseReducer'
import RTKPokemon from './src/Components/RTKPokemon/RTKPokemon'
import RTKPokemon1 from './src/Components/RTKPokemon/RTKPokemon-1'
import RTKTodoApi from './src/Components/RTKTodoApi/RTKTodoApi'
import RTKCards from './src/Components/RTKCards/RTKCards'
import RTKCardsAgain from './src/Components/RTKCards/RTKCardsAgain'
import RTKCustomer from './src/Components/RTKCustomerVendor/RTKCustomer'
import RTKVendor from './src/Components/RTKCustomerVendor/RTKVendor'
import App from './App.tsx'
import UseFormStatus from './src/Components/FormStatus/UseFormStatus.js'
import Parent from './Delete.tsx'
import BasicForm from './src/Components/BasicForm/BasicForm.tsx'
import appStore1 from './src/Utils1/appStore.js'
import RTKCards1 from './src/Components/RTKCards/RTKCards1.js'
import RTKCustomerAgain from './src/Components/RTKCustomerVendor copy/RTKCustomer.js'
import RTKVendorAgain from './src/Components/RTKCustomerVendor copy/RTKVendor.js';
import CarImage from "./src/assets/car.jpg"

console.log("hi")
const heading = React.createElement("h1",
    {},
    "heading"
)

const root = ReactDOM.createRoot(document.getElementById("root"))
const appRouter = createBrowserRouter(
    [
        {
            path: "",
            element: <AppLayout />,
            children: [
                {
                    path: "",
                    element: <Body />
                },
                {
                    element: <ProtectedRoute />,
                    children: [
                        {
                            path: "about",
                            element: <About />
                        }
                    ]
                },
                // {
                //     path: "useCallback",
                //     element: <UseCallback />
                // },
                {
                    path: "useTodo",
                    element: <TodoCustomHook />
                },
                {
                    path: "useTodos",
                    element: <TodosCustomHook />
                },
                {
                    path: "debouncing",
                    element: <Provider store={appStore}><Debouncing /></Provider>
                },
                {
                    path: "forwardRef",
                    element: <ForwardRef />
                },
                {
                    path: "hoc",
                    element: <HOC />
                },
                {
                    path: "context",
                    element: <Context />
                },
                {
                    path: "imperativeHandle",
                    element: <UseImperativeHandle />
                },
                {
                    path: "livechat",
                    element: <Provider store={appStore}><LiveChat /></Provider>
                },
                {
                    path: "useMemo",
                    element: <UseMemo />
                },
                {
                    path: "radio",
                    element: <Radio />
                },
                {
                    path: "select",
                    element: <Select1 />
                },
                {
                    path: "react-hook-form",
                    element: <ReactHookForm />
                },
                {
                    path: "recursionComment",
                    element: <RecursionComment />
                },
                {
                    path: "todoThunk",
                    element: <Provider store={appStore}> <Redux /></Provider>
                },
                {
                    path: "styledComponents",
                    element: <StyledComponents />
                },
                {
                    path: "useReducer",
                    element: <UseReducer />
                },
                {
                    path: "RTK",
                    element: <Provider store={appStore}> <RTKPokemon /></Provider>
                },
                {
                    path: "RTK1",
                    element: <Provider store={appStore}> <RTKPokemon1 /></Provider>
                },
                {
                    path: "RTKtodo",
                    element: <Provider store={appStore}> <RTKTodoApi /></Provider>
                },
                {
                    path: "RTKcards",
                    element: <Provider store={appStore}> <RTKCardsAgain /></Provider>
                },
                {
                    path: "RTKcustomer",
                    element: <Provider store={appStore}> <RTKCustomer /></Provider>
                },
                {
                    path: "RTKvendor",
                    element: <Provider store={appStore}> <RTKVendor /></Provider>
                },
                {
                    path: "RTKcustomerAgain",
                    element: <Provider store={appStore}> <RTKCustomerAgain /></Provider>
                },
                {
                    path: "RTKvendorAgain",
                    element: <Provider store={appStore}> <RTKVendorAgain /></Provider>
                },
                {
                    path: "RTKCardsAgain",
                    element: <Provider store={appStore1}><RTKCards1 /></Provider>
                }
            ]
        }
    ]
)

root.render(<ErrorBoundary
    FallbackComponent={ErrorBoundaryFunction}
    onReset={() => console.log("reset")}>
    <RouterProvider router={appRouter} />
</ErrorBoundary>)


// root.render(<RouterProvider router={appRouter} />)

// root.render(<ErrorBoundaryClass>
//     <A />
// </ErrorBoundaryClass>)

// root.render(<App />)
// root.render(<BasicForm />)

// root.render(<Provider store={appStore1}><Cards /></Provider>)


const arr = [
    { "key": "A", "value": 30 },
    { "key": "B", "value": 20 },
    { "key": "A", "value": 10 },
    { "key": "B", "value": 50 },
    { "key": "C", "value": 60 }
]

function transform(arr) {
    let obj = {}
    arr.forEach(each => {
        if (obj[each["key"]]) {
            obj[each["key"]].push(each["value"])
        } else {
            obj[each["key"]] = [each["value"]]
        }
    })
    return obj
}
// console.log(transform(arr))

function transform1(arr) {
    return arr.reduce((acc, { key, value }) => {
        if (!acc[key]) {
            acc[key] = [value];
        } else acc[key].push(value);

        return acc;
    }, {});
}

// console.log(transform1(arr))

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return [...acc, ...flattenArray(val)]
        } else {
            return [...acc, val]
        }
    }, [])
}

// console.log(flattenArray([1, 2, [3, 4, [5, 6], 7], 8]))

let array1 = []
function flatten(arr) {
    if (!Array.isArray(arr)) {
        array1.push(arr)
    } else {
        for (let i = 0; i < arr.length; i++) {
            flatten(arr[i])
        }
    }
}
flatten([1, 2, [3, 4, [5, 6], 7], 8, 9])
// console.log(array1)

function denomination(amount, purchase) {
    let obj = {};
    let denominationVals = [1000, 100, 10, 5];
    let exhange = amount - purchase;
    for (let val of denominationVals) {
        if (val <= exhange) {
            obj[val] = Math.floor(exhange / val);
            exhange = exhange % val;
        }
    }
    return obj
}
// console.log(denomination(655,300))