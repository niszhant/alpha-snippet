const ProductService = function () {
    /**
     * @type {Array<String>} products
     */
    let products = [];
    /**
     * 
     * @returns {Array<string>}
     */
    this.getProducts = function () {
        return products;
    };
    /**
     * @param {String} item
     * @returns {Promise<string>}
     */
    this.createProduct = (item) => {
        return new Promise((resolve, reject) => {
            if (products.includes(item)) {
                reject('Product aleady available');
            } else {
                products.push(item);
                resolve('Product added to list')
            }
        });
    }

    /**
     * @param {String} item
     * @returns {Promise<boolean | string>}
     */
    this.deleteProduct = (item) => {
        return new Promise((resolve, reject) => {
            if (products.includes(item)) {
                products = products.filter((content) => content !== item);
                resolve(true);
            } else {
                reject('Item not found.');
            }
        });
    }
}

// /**
//  * @param {String} item
//  * @returns {Promise<string>}
//  */
// ProductService.prototype.createProduct = (item) => {
//     ProductService.call(this);
//     const products = this.getProducts();
//     return new Promise((resolve, reject) => {
//         if (products.indexOf(item) > 0) {
//             reject('Product aleady available');
//         } else {
//             products.push(item);
//             resolve('Product added to list')
//         }
//     });
// }


// singleton instance exported
module.exports = new ProductService();