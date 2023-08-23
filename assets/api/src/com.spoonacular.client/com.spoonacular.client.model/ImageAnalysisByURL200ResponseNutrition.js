/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ImageAnalysisByURL200ResponseNutritionCalories from './ImageAnalysisByURL200ResponseNutritionCalories';

/**
 * The ImageAnalysisByURL200ResponseNutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutrition
 * @version 1.1
 */
class ImageAnalysisByURL200ResponseNutrition {
    /**
     * Constructs a new <code>ImageAnalysisByURL200ResponseNutrition</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutrition
     * @param recipesUsed {Number} 
     * @param calories {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} 
     * @param fat {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} 
     * @param protein {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} 
     * @param carbs {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} 
     */
    constructor(recipesUsed, calories, fat, protein, carbs) { 
        
        ImageAnalysisByURL200ResponseNutrition.initialize(this, recipesUsed, calories, fat, protein, carbs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipesUsed, calories, fat, protein, carbs) { 
        obj['recipesUsed'] = recipesUsed;
        obj['calories'] = calories;
        obj['fat'] = fat;
        obj['protein'] = protein;
        obj['carbs'] = carbs;
    }

    /**
     * Constructs a <code>ImageAnalysisByURL200ResponseNutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutrition} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutrition} The populated <code>ImageAnalysisByURL200ResponseNutrition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageAnalysisByURL200ResponseNutrition();

            if (data.hasOwnProperty('recipesUsed')) {
                obj['recipesUsed'] = ApiClient.convertToType(data['recipesUsed'], 'Number');
            }
            if (data.hasOwnProperty('calories')) {
                obj['calories'] = ImageAnalysisByURL200ResponseNutritionCalories.constructFromObject(data['calories']);
            }
            if (data.hasOwnProperty('fat')) {
                obj['fat'] = ImageAnalysisByURL200ResponseNutritionCalories.constructFromObject(data['fat']);
            }
            if (data.hasOwnProperty('protein')) {
                obj['protein'] = ImageAnalysisByURL200ResponseNutritionCalories.constructFromObject(data['protein']);
            }
            if (data.hasOwnProperty('carbs')) {
                obj['carbs'] = ImageAnalysisByURL200ResponseNutritionCalories.constructFromObject(data['carbs']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} recipesUsed
 */
ImageAnalysisByURL200ResponseNutrition.prototype['recipesUsed'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} calories
 */
ImageAnalysisByURL200ResponseNutrition.prototype['calories'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} fat
 */
ImageAnalysisByURL200ResponseNutrition.prototype['fat'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} protein
 */
ImageAnalysisByURL200ResponseNutrition.prototype['protein'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/ImageAnalysisByURL200ResponseNutritionCalories} carbs
 */
ImageAnalysisByURL200ResponseNutrition.prototype['carbs'] = undefined;






export default ImageAnalysisByURL200ResponseNutrition;

