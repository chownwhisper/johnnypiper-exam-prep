const assert = require('assert');
const fetch = require('node-fetch');

suite('Home page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8080/");
    let body = await res.text();
    
    // Debugging: Log the fetched HTML content
    console.log("Fetched HTML:", body);
    
    assert.ok(body.includes("<h1>Welcome</h1>"), "Page title not found");
  });
  
  test('Movies count', async function() {
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    
    assert.ok(body.includes("Added movies: <b>3</b>"), "Movies count not found");
  });
});

