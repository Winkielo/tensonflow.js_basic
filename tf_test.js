//imports the tensorflow.js library and assigned it to tf
const tf = require('@tensorflow/tfjs-node');

// Define a tensor(MD array)
const tensor = tf.tensor([1, 2, 3, 4]);

// Square the tensor values
const squaredTensor = tensor.square();

// Print the squared values
squaredTensor.print();
