/**
 * Created by irsyad on 1/5/17.
 */

export default class Utils {
    static arrayIncludes(arr1, arr2) {
        return arr1.some(item => {
            return arr2.includes(item)
        })
    }

    // var capital = word => word.charAt(0).toUpperCase() + word.slice(1);
    static capital(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
}