module.exports = async function* pipe(stream, isTTY, params) {
  if (isTTY) {
    console.log('pipe: TTY mode not allowed in this pipe');
    process.exit(0);
  }
  const separator = params._[0] || '\n';
  for await (let chunk of stream) {
    for (const line of chunk.toString().split(separator)) {
      yield line;
    }
  }
};
