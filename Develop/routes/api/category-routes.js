const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{model: Product}] })
    return res.status(200).json({ message: 'list of all categories:', data: categories })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { include: Product })
    
    return res.status(200).json({ message: 'list of a category by id:', data: category })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name
    })
    return res.status(200).json({ message: 'new category is:', newCategory })

  } catch (error) {
    return res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json({ message: 'your category has been updated.', updateCategory })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
    if (deletedCategory === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.status(200).json({ message: `Category with ID ${req.params.id} has been deleted`, deletedCategory })
  } catch (error) {
    return res.status(500).json(error)
  }
});

module.exports = router;
