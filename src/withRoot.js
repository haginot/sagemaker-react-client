import React from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo'
import lime from '@material-ui/core/colors/lime'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[700]

        },
        secondary: {
            light: lime[300],
            main: lime[500],
            dark: lime[700],
        },
    },
    typography: {
        useNextVariants: true,
    },
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }
    return WithRoot;
}

export default withRoot;