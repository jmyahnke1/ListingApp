using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ListingApp.Infrastructure;
using ListingApp.Models;

namespace ListingApp.Controllers
{
    public class FavoritesController : ApiController
    {
        private ListingAppDataContext db = new ListingAppDataContext();

        // GET: api/Favorites
        public IQueryable<Favorite> GetFavorites()
        {
            return db.Favorites;
        }

        // GET: api/Favorites/5
        [ResponseType(typeof(Favorite))]
        public IHttpActionResult GetFavorite(int id)
        {
            Favorite favorite = db.Favorites.Find(id);
            if (favorite == null)
            {
                return NotFound();
            }

            return Ok(favorite);
        }

        // PUT: api/Favorites/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFavorite(int id, Favorite favorite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != favorite.FavoriteId)
            {
                return BadRequest();
            }

            db.Entry(favorite).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoriteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Favorites
        [ResponseType(typeof(Favorite))]
        public IHttpActionResult PostFavorite(Favorite favorite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Favorites.Add(favorite);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = favorite.FavoriteId }, favorite);
        }

        // DELETE: api/Favorites/5
        [ResponseType(typeof(Favorite))]
        public IHttpActionResult DeleteFavorite(int id)
        {
            Favorite favorite = db.Favorites.Find(id);
            if (favorite == null)
            {
                return NotFound();
            }

            db.Favorites.Remove(favorite);
            db.SaveChanges();

            return Ok(favorite);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FavoriteExists(int id)
        {
            return db.Favorites.Count(e => e.FavoriteId == id) > 0;
        }
    }
}