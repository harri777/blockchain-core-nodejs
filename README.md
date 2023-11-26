<h1 align="center">Blockchain Core</h1>

The objective of be a minimalist and efficient blockchain application built using Node.js. This application features a REST API for interaction and management, along with supporting peer-to-peer (P2P) connections with an integrated consensus protocol.

The aim of this project is to provide a solid and extensible foundation for those looking to explore the fundamental concepts of blockchain technology, without the added complexity of mining algorithms. It is ideal for educational environments, prototype development, or as a starting point for customized enterprise solutions.

## Use Cases

This Simple Blockchain Core can be utilized in a variety of scenarios, including but not limited to:

1. Educational Systems
2. Product Prototyping
3. Record Keeping and Auditing Application
4. Smart Contracts and DApps Development
5. Voting Systems

## How to use
### 1. Install dependencies
```
  $ yarn or npm install
```
### 2. Run the first node
```
  $ npm run dev
```
### 3. Run the second node or more (change the ports if you want to run it in the same node)
```
  $ HTTP_PORT=8081 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev
```
### 4. Make request for to create new block
```
  $ curl --request POST \
  --url http://localhost:8080/mine \
  --header 'Content-Type: application/json' \
  --data '{
	"data": "my data"
  }'
```
### 5. For unit tests
```
  $ npm run tests
```
## Author
- Harrisson Biaggio [hawkz]
