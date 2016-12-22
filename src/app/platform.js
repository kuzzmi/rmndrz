import { Platform } from 'react-native';

export default {
    is: name => {
        if (!global.window || !global.document)
            return name === 'node';
        else if (global.window.chrome && global.window.chrome.extension)
            return name === 'chrome/extension';
        else if (global.window && global.window.process && global.window.process.type)
            return name === 'electron';
        else if (Platform.OS === 'ios')
            return ( name === 'native' || name === 'ios' );
        else if (Platform.OS === 'android')
            return ( name === 'native' || name === 'android' );
        else
            return name === 'web';
    },
};
