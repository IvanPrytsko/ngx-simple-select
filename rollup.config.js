import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/bundles/bundle.umd.js',
        format: 'umd',
        globals: {
            '@angular/core': 'ng.core',
            'rxjs/Observable': 'Rx',
            'rxjs/Subject': 'Rx',
            'rxjs/operators': 'Rx.Observable.prototype',
            'rxjs/operators/switchMap': 'Rx.Observable.prototype',
            'rxjs/operators/filter': 'Rx.Observable.prototype',
            'rxjs/operators/take': 'Rx.Observable.prototype',
            'rxjs/operators/takeUntil': 'Rx.Observable.prototype',
            'rxjs/operators/startWith': 'Rx.Observable.prototype',
            'rxjs/observable/defer': 'Rx.Observable',
            'rxjs/observable/merge': 'Rx.Observable'
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