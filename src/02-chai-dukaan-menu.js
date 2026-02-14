/**
 * ☕ Raju ki Chai Dukaan - Menu Formatter
 *
 * Raju bhai ne apni chai dukaan ka menu digitize karna decide kiya hai.
 * Items ka array milega, aur tujhe ek formatted menu string banana hai
 * jisme har item ka naam UPPERCASE mein ho aur price ke saath likha ho.
 *
 * Rules:
 *   - items ek array hai of objects: [{ name: "masala chai", price: 15 }, ...]
 *   - Har item ka naam toUpperCase() karo
 *   - Format: "NAAM - Rs.PRICE" (e.g., "MASALA CHAI - Rs.15")
 *   - Saare formatted items ko " | " se join karo
 *   - Items jinka price 0 ya negative hai, unhe skip karo (filter out)
 *   - Items jinka naam empty string hai ya string nahi hai, unhe bhi skip karo
 *   - Hint: Use Array.isArray(), filter(), map(), join(), toUpperCase()
 *
 * Validation:
 *   - Agar items array nahi hai ya empty hai, return ""
 *
 * @param {Array<{name: string, price: number}>} items - Menu items
 * @returns {string} Formatted menu string
 *
 * @example
 *   formatChaiMenu([{ name: "masala chai", price: 15 }, { name: "samosa", price: 12 }])
 *   // => "MASALA CHAI - Rs.15 | SAMOSA - Rs.12"
 *
 *   formatChaiMenu([])
 *   // => ""
 */
export function formatChaiMenu(items) {
  // Your code here
  if(items === null || items === undefined || items.length === 0 || !(Array.isArray(items)) ){
    return "";
  }
  let ans = "";
  let new_items = items.filter((ele) => ele.name != "" && ele.price >= 0)
  for(let i = 0;i<new_items.length;i++){

    if(new_items[i].price === 0 || new_items[i].name === "" || new_items[i].price <= 0){
      continue
    }
    if(i != 0){
      ans = ans + " | ";
    }
    ans = ans + `${new_items[i].name.toUpperCase()} - Rs.${new_items[i].price}`
  }
  return ans;
}
