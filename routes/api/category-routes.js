const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Product }]
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }]
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a new category
  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update a category by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const [updateResult] = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      // If no rows were updated, then the category with the provided ID does not exist
      if (updateResult === 0) {
        return res.status(404).json({ message: 'No category found with this id!' });
      }
  
      // If the update was successful, fetch the updated category to return it
      const updatedCategory = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      // If the tag was found
      if (updatedCategory) {
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ message: 'No category found with this id after update!' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
