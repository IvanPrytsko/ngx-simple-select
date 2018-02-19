import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/bundles/bundle.umd.js',
        format: 'umd',
        globals: {
            '@angular/core': 'ng.core',
            'rxjs/Observable': 'Rx',
            'rxjs/ReplaySubject': 'Rx',
            'rxjs/operators': 'Rx.Observable.prototype',
            'rxjs/add/operator/map': 'Rx.Observable.prototype',
            'rxjs/add/operator/takeUntil': 'Rx.Observable.prototype',
            'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
            'rxjs/add/observable/fromEvent': 'Rx.Observable',
            'rxjs/add/observable/of': 'Rx.Observable',
            'rxjs/add/observable/defer': 'Rx.Observable'
        }
    },
    name: 'MyModule',
    options: {
        format: 'umd'
    },
    plugins: [
        resolve(
            {
                modulesOnly: true
            }
        )
    ],
    external(id) {
        return id.indexOf('node_modules') >= 0;
    }
}