# 🎨 Scratch Custom Operator Block - Square and Square Root

Elevate your Scratch experience by introducing new operator blocks for 'Square' and 'Square Root' to perform advanced mathematical operations! 🚀

---

## 🛠️ **Steps to Set Up the Project**

### 1. **Clone the Repositories**

Clone the following repositories from the Scratch Foundation GitHub organization:

- [**scratch-gui**](https://github.com/scratchfoundation/scratch-gui)
- [**scratch-vm**](https://github.com/scratchfoundation/scratch-vm)
- [**scratch-blocks**](https://github.com/scratchfoundation/scratch-blocks)

### 2. **Install Dependencies**

Navigate to each cloned repository and install the dependencies.

### 3. **Link scratch-blocks and scratch-vm to scratch-gui**

Inside the `scratch-gui` directory, link `scratch-vm` and `scratch-blocks`:

```bash
npm link ../scratch-vm
npm link ../scratch-blocks
```

### 4. **Create New Operator Blocks**

#### In `scratch-blocks/blocks_vertical/operators.js`:

Add the logic for the 'Square' and 'Square Root' blocks.

### 5. **Implement Logic in scratch-vm**

#### Inside `scratch-vm/src/blocks/scratch3_operators.js`:

Create the logic for the 'Square' block.

### 6. **Update Toolbox in scratch-gui**

Inside `scratch-gui/src/lib/make-toolbox-xml.js`, include blocks for 'Square' and 'Square Root'.

```javascript
// Add the following inside the appropriate section of the file
// Example:
'<block type="math_square"></block>',
// Add a similar line for Square Root
```

### 7. **Build scratch-blocks**

Build `scratch-blocks` again to incorporate the new changes:

```bash
cd ../scratch-blocks
npm run build
```

### 8. **Link scratch-vm to scratch-gui**

Inside the `scratch-gui` directory, link `scratch-vm`:

```bash
npm link ../scratch-vm
```

### 9. **Build and Run**

Build `scratch-gui` again and start the project:

```bash
cd ../scratch-gui
npm start
```

Now, the Scratch GUI should reflect the changes with the new 'Square' and 'Square Root' operator blocks.

---

## 📁 Project Structure

```
project-root/
|-- scratch-gui/
|-- scratch-vm/
|-- scratch-blocks/
```

Adjust the details and paths according to your actual file structure and implementation.

