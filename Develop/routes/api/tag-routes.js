const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({ include: Product })
    return res.status(200).json({ message: 'list of all tags:', data: allTags })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: Product
    })
    return res.status(200).json({ message: 'list of a tag by id:', data: tag })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    })
    return res.status(200).json({ message: 'new tag created!', data: newTag })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json({ message: `the new tag id is ${req.params.id}`, data: updateTag })
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json({ message: `tag with the id value ${req.params.id} has been deleted`, data: deleteTag })
  } catch (error) {
    return res.status(500).json(error)
  }
});

module.exports = router;
