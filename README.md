# random-access-rn-file
A random-access-* compatible implementation for React-Native that uses it's filesystem

```
npm install --save random-access-rn-file

# If you're building an application
# Link the FS APIs
react-native link react-native-fs

# Make node modules work (Make sure to import shim.js)
npm install --save-dev rn-nodeify
rn-nodeify --install --hack
```

Uses [random-access-storage](https://github.com/random-access-storage/random-access-storage) along with [react-native-fs](https://github.com/itinance/react-native-fs/) to provide the ability to read and write files.

After installing, make sure to run `react-native link react-native-fs` to set up the native dependencies

Supported operations:

- `read`
- `write`

## Example

```javascript
import hyperdrive from 'hyperdrive'
import storage from 'random-access-rn-file'

const archive = hyperdrive(storage)

archive.writeFile('/example.txt', 'Hello World', 'utf8')
```

If you're having trouble getting node APIs to work in React-Native, check out [rn-nodeify](https://github.com/tradle/rn-nodeify) to see if it helps, or [open an issue](https://github.com/RangerMauve/random-access-rn-file/issues/new).
